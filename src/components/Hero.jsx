// ============================================
// FILE: src/components/Hero.jsx
// ============================================

import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ onViewWork }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 7;

  const slideContent = [
    {
      title: "Nico's Portfolio",
      subtitle: "Creative Developer & UI Specialist",
      description: "Figma-to-Code specialist building stunning front-ends and scalable applications"
    },
    {
      title: "Nico's Portfolio",
      subtitle: "Project Manager & Scrum Master",
      description: "Leading teams to deliver successful projects through Agile methodologies and effective project management"
    },
    {
      title: "Full-Stack Developer",
      subtitle: "React | Springboot | django | tailwind",
      description: "Creating robust web applications from concept to deployment with modern technologies and best practices"
    },
    {
      title: "UI/UX Enthusiast",
      subtitle: "Design Systems & User Experience",
      description: "Crafting intuitive interfaces that delight users and drive engagement through thoughtful design"
    },
    {
      title: "Problem Solver",
      subtitle: "Clean Code & Architecture",
      description: "Writing maintainable, scalable code that stands the test of time and adapts to changing requirements"
    },
    {
      title: "Team Collaborator",
      subtitle: "Agile & Remote Ready",
      description: "Working effectively with distributed teams to deliver exceptional products on schedule"
    },
    {
      title: "Always Learning",
      subtitle: "Tech Explorer & Innovator",
      description: "Continuously exploring new technologies and methodologies to stay at the forefront of web development"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Animated Background */}
      <div className="background-animations">
        <div className="arrow-left">
          <svg viewBox="0 0 200 400">
            <defs>
              <linearGradient id="leftGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polyline points="180,50 20,200 180,350" fill="none" stroke="url(#leftGlow)" strokeWidth="3" />
          </svg>
        </div>

        <div className="arrow-right">
          <svg viewBox="0 0 200 400">
            <defs>
              <linearGradient id="rightGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polyline points="20,50 180,200 20,350" fill="none" stroke="url(#rightGlow)" strokeWidth="3" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="profile-wrapper">
          <div className="profile-outer">
            <div className="profile-inner">
              <img src="/nicohome.png" alt="Nico" className="profile-image" />
            </div>
          </div>
        </div>

        <h1 className="hero-title">{slideContent[activeSlide].title}</h1>
        <p className="hero-subtitle">{slideContent[activeSlide].subtitle}</p>
        <p className="hero-description">{slideContent[activeSlide].description}</p>

        <div className="slide-indicators">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`indicator ${index === activeSlide ? 'active' : ''}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <button className="cta-button" onClick={onViewWork}>View My Work</button>
      </div>

      <div className="gradient-overlay" />
    </section>
  );
};

export default Hero;