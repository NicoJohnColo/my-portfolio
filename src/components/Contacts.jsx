// ============================================
// FILE: src/components/Contacts.jsx
// ============================================

import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <section className="section-container contacts-section">
      {/* Animated Background */}
      <div className="background-animations">
        <div className="arrow-left">
          <svg viewBox="0 0 200 400">
            <defs>
              <linearGradient id="contactLeftGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polyline points="180,50 20,200 180,350" fill="none" stroke="url(#contactLeftGlow)" strokeWidth="3" />
          </svg>
        </div>

        <div className="arrow-right">
          <svg viewBox="0 0 200 400">
            <defs>
              <linearGradient id="contactRightGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polyline points="20,50 180,200 20,350" fill="none" stroke="url(#contactRightGlow)" strokeWidth="3" />
          </svg>
        </div>
      </div>

      <div className="section-content">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together on your next project</p>
        
        <div className="contacts-grid">
          {/* Contact content will be added here */}
        </div>
      </div>

      <div className="gradient-overlay" />
    </section>
  );
};

export default Contacts;