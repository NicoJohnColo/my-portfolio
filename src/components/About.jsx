// ============================================
// FILE: src/components/About.jsx
// ============================================

import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section-container about-section">
      {/* Animated Background - Same as Hero */}
      <div className="background-animations">
        {/* Left Arrow */}
        <div className="arrow-left">
          <svg viewBox="0 0 200 400">
            <defs>
              <linearGradient id="aboutLeftGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polyline
              points="180,50 20,200 180,350"
              fill="none"
              stroke="url(#aboutLeftGlow)"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Right Arrow */}
        <div className="arrow-right">
          <svg viewBox="0 0 200 400">
            <defs>
              <linearGradient id="aboutRightGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polyline
              points="20,50 180,200 20,350"
              fill="none"
              stroke="url(#aboutRightGlow)"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      <div className="section-content">
        <div className="about-layout">
          {/* Left Side - Image */}
          <div className="about-image-container">
            <div className="about-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2 L12 12 L17 7"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <div className="about-image-placeholder">
              <img 
                src="/nico.png" 
                alt="Developer" 
                className="developer-image"
              />
            </div>
            
            {/* Social Links */}
            <div className="about-social">
              <a href="https://github.com/NicoJohnColo" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.393.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1DHVt7PP6N/?mibextid=wwXIfr" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/niconhoj/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="#000" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#000" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-text-container">
            <h2 className="about-main-title">ABOUT ME</h2>
            
            <div className="about-text-content">
              <p className="about-paragraph">
                I am a <strong>Frontend Developer</strong> with full-stack capabilities, specializing in creating seamless, responsive, and interactive web experiences. With expertise in modern JavaScript frameworks and a strong foundation in backend technologies, I bridge the gap between beautiful interfaces and robust server-side functionality. I'm passionate about building clean, efficient, and user-centered solutions that deliver exceptional digital experiences.
              </p>
              
              <p className="about-paragraph">
                As a <strong>Certified Scrum Master</strong> and <strong>Project Manager</strong>, I lead Agile teams to deliver projects on time and within scope, ensuring clear communication between technical teams and stakeholders.
              </p>
              
              <p className="about-paragraph">
                I specialize in software development, web and mobile applications, and system design. Whether it's creating an app, improving an existing system, or designing a solution from scratch, my goal is to deliver technology that is efficient, secure, and meaningful.
              </p>
              
              <p className="about-paragraph">
                The value I bring is clarity transforming complex problems into simple, usable solutions. I don't just write code; I build experiences. Let's turn your ideas into something powerful.
              </p>
            </div>

            <div className="about-progress">
              <div className="progress-item">
                <div className="progress-label">
                  <span>Coffee Consumption</span>
                  <span className="progress-value">95%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '95%'}}></div>
                </div>
              </div>
              
              <div className="progress-item">
                <div className="progress-label">
                  <span>Creative Chaos</span>
                  <span className="progress-value">90%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '90%'}}></div>
                </div>
              </div>
              
              <div className="progress-item">
                <div className="progress-label">
                  <span>Pixel Perfection</span>
                  <span className="progress-value">98%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '98%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="gradient-overlay" />
    </section>
  );
};

export default About;