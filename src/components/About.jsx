import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="grain-overlay"></div>
      
      <div className={`about-container ${isVisible ? 'fade-in' : ''}`}>
        {/* Animated Background Gradient */}
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        
        {/* Header */}
        <div className="about-header">
          <div className="avatar-wrapper">
            <div className="avatar-ring"></div>
            <img
              src="/nico.png"
              alt="Nico John G. Colo"
              className="about-avatar"
            />
          </div>

          <div className="about-header-text">
            <div className="title-wrapper">
              <h1 className="gradient-text">Nico John G. Colo</h1>
              <div className="status-indicator">
                <span className="status-dot"></span>
                Available for opportunities
              </div>
            </div>
            
            <p className="about-role">
              <span className="role-item">BSIT Student</span>
              <span className="role-divider">•</span>
              <span className="role-item">Frontend Developer</span>
              <span className="role-divider">•</span>
              <span className="role-item">Scrum Master</span>
            </p>
            
            <div className="location-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Cebu City, Philippines
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="about-btn primary" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                View Resume
              </a>
              <a href="mailto:nicojohncolo3@gmail.com" className="about-btn secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="about-content">
          {/* About Block */}
          <div className="about-block about-main">
            <div className="block-header">
              <h2>About Me</h2>
              <div className="header-line"></div>
            </div>
            
            <div className="text-content">
              <p className="highlight-text">
                I am a Bachelor of Science in Information Technology student with a
                strong passion for frontend development and modern web technologies.
                I specialize in building clean, responsive, and user-centered interfaces
                that prioritize both aesthetics and functionality.
              </p>
              <p>
                Born on <strong>May 26, 2005</strong>, I am currently <strong>20 years old</strong> and 
                passionate about technology and innovation. As a <strong>certified Scrum Master</strong>, 
                I bring valuable project management expertise to technical teams, facilitating agile 
                methodologies and ensuring smooth project execution. I excel in coordinating cross-functional 
                teams, removing impediments, and fostering an environment of continuous improvement.
              </p>
              <p>
                I continuously expand my skill set through self-learning, coursework,
                and hands-on projects, with a focus on writing maintainable code,
                following best practices, and delivering meaningful digital experiences
                that make a real impact.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">Years of Study</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">∞</div>
                <div className="stat-label">Learning Mindset</div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="about-sidebar">
            {/* Tech Stack */}
            <div className="about-block tech-block">
              <div className="block-header">
                <h2>Tech Stack</h2>
                <div className="header-line"></div>
              </div>

              <div className="tech-group">
                <div className="tech-category">
                  <span className="tech-title">
                    <span className="tech-icon">⚡</span>
                    Frontend
                  </span>
                  <div className="tech-list">
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag featured">React</span>
                    <span className="tech-tag">Tailwind CSS</span>
                  </div>
                </div>

                <div className="tech-category">
                  <span className="tech-title">
                    <span className="tech-icon">🗄️</span>
                    Backend
                  </span>
                  <div className="tech-list">
                     <span className="tech-tag">Java</span>
                      <span className="tech-tag">Python</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">Supabase</span>
                  </div>
                </div>

                <div className="tech-category">
                  <span className="tech-title">
                    <span className="tech-icon">🛠️</span>
                    Tools
                  </span>
                  <div className="tech-list">
                    <span className="tech-tag">GitHub</span>
                    <span className="tech-tag">VS Code</span>
                    <span className="tech-tag">Figma</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="about-block">
              <div className="block-header">
                <h2>Journey</h2>
                <div className="header-line"></div>
              </div>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2025</span>
                    <strong>BS Information Technology – 4th Year</strong>
                    <p>Cebu Institute of Technology - University</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2025</span>
                    <strong>Capstone Project Developer</strong>
                    <p>Building innovative solutions with modern tech stack</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2024</span>
                    <strong>Self-Learning & Projects</strong>
                    <p>Frontend development, UI design, and system fundamentals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;