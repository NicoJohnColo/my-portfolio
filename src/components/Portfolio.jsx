import React, { useState, useEffect, useCallback } from 'react';
import './Portfolio.css';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Certificates from './Certificate';
import Contacts from './Contacts';
import ThemeToggle from './ThemeToggle';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Theme (light / dark) with persistence and system preference fallback
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (e) {}
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme(t => (t === 'dark' ? 'light' : 'dark')), []);
  
  // Simple smooth scroll using browser's native behavior
  const smoothScrollTo = useCallback((targetPosition) => {
    setIsScrolling(true);
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    setTimeout(() => setIsScrolling(false), 1000);
  }, []);

  // Simple scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const navHeight = 100;
    const targetPosition = element.offsetTop - navHeight;
    
    smoothScrollTo(targetPosition);
    setActiveSection(sectionId);

    // Update URL without page jump
    window.history.pushState(null, '', `#${sectionId}`);
  }, [smoothScrollTo]);

  // Advanced scroll progress calculation
  const calculateScrollProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    const trackLength = documentHeight - windowHeight;
    const progress = (scrollTop / trackLength) * 100;
    setScrollProgress(Math.min(Math.max(progress, 0), 100));
  }, []);

  // Simple active section detection
  const detectActiveSection = useCallback(() => {
    const sections = ['home', 'about', 'projects', 'certificates', 'contacts'];
    const scrollPosition = window.pageYOffset + 150;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section);
      
      if (element && scrollPosition >= element.offsetTop) {
        setActiveSection(section);
        break;
      }
    }
  }, []);

  // Simple navbar visibility control
  const handleNavbarVisibility = useCallback((currentScrollY) => {
    // Show navbar when at top or scrolling up
    if (currentScrollY < 100) {
      setNavVisible(true);
    } else if (currentScrollY < lastScrollY) {
      setNavVisible(true);
    } else if (currentScrollY > lastScrollY + 50) {
      setNavVisible(false);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // Simplified scroll handler
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      calculateScrollProgress();
      detectActiveSection();
      handleNavbarVisibility(currentScrollY);
      
      // Clear existing timeout
      clearTimeout(timeoutId);
      // Set scrolling state
      setIsScrolling(true);
      // Clear scrolling state after scroll ends
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [calculateScrollProgress, detectActiveSection, handleNavbarVisibility]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling) return;

      const sections = ['home', 'about', 'projects', 'certificates', 'contacts'];
      const currentIndex = sections.indexOf(activeSection);

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
          scrollToSection(sections[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentIndex > 0) {
          scrollToSection(sections[currentIndex - 1]);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection('home');
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection('contacts');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, isScrolling, scrollToSection]);

  // Handle initial hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'about', 'projects', 'certificates', 'contacts'].includes(hash)) {
      setTimeout(() => scrollToSection(hash), 300);
    }
  }, [scrollToSection]);

  return (
    <div className="portfolio-container">
      {/* Premium Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ 
          width: `${scrollProgress}%`,
          opacity: scrollProgress > 0 ? 1 : 0
        }} 
      />

      {/* Smart Navigation Bar */}
      <nav className={`navbar ${navVisible ? 'navbar-visible' : 'navbar-hidden'} ${isScrolling ? 'navbar-scrolling' : ''}`}>
        <div className="nav-content">
          <div 
            className="logo" 
            onClick={() => scrollToSection('home')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && scrollToSection('home')}
          >
            <img src="/nico-logo.png" alt="Nico John Colo" className="logo-img" />
          </div>

          <ul className="nav-menu" role="navigation">
            {['home', 'about', 'projects', 'certificates', 'contacts'].map((section) => (
              <li key={section} className="nav-item-with-toggle">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button 
                    className={`nav-btn ${activeSection === section ? 'nav-btn-active' : ''}`}
                    onClick={() => scrollToSection(section)}
                    aria-current={activeSection === section ? 'page' : undefined}
                  >
                    <span className="nav-btn-text">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                    <span className="nav-btn-indicator" />
                  </button>

                  {section === 'contacts' && (
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sections with smooth rendering */}
      <main className="portfolio-main">
        <section id="home" className="portfolio-section">
          <Hero onViewWork={() => scrollToSection('projects')} />
        </section>
        
        <section id="about" className="portfolio-section">
          <About />
        </section>
        
        <section id="projects" className="portfolio-section">
          <Projects />
        </section>
        
        <section id="certificates" className="portfolio-section">
          <Certificates />
        </section>
        
        <section id="contacts" className="portfolio-section">
          <Contacts />
        </section>
      </main>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${scrollProgress > 10 ? 'back-to-top-visible' : ''}`}
        onClick={() => scrollToSection('home')}
        aria-label="Scroll to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Scroll Indicator */}
      <div className={`scroll-indicator ${scrollProgress < 95 ? 'scroll-indicator-visible' : ''}`}>
        <div className="scroll-indicator-animation" />
      </div>
    </div>
  );
};

export default Portfolio;