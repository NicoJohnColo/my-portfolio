import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'SOAR: Student Organization Activity Resource',
      tagline: 'Organization Management Platform',
      problem: 'Student organizations struggled with manual tracking of members, events, and permissions.',
      solution: 'Built a centralized web platform with role-based access control and real-time event management.',
      impact: 'Eliminated manual processes for 100+ members across 5 organizations.',
      role: 'Front-end Developer',
      contributions: [
        'Role-based authentication system',
        'Responsive dashboard with member & event management',
        'Real-time updates with Supabase'
      ],
      features: [
        'Role-based access control',
        'Real-time event calendar',
        'Member management',
        'JWT authentication'
      ],
      metrics: {
        users: 'N/A',
        timeframe: '10 weeks',
        coverage: '5 organizations'
      },
      technologies: [
        { name: 'Python', purpose: 'Backend APIs' },
        { name: 'Django', purpose: 'Web framework' },
        { name: 'JavaScript', purpose: 'Frontend' },
        { name: 'Supabase', purpose: 'Real-time database' },
        { name: 'Tailwind & CSS', purpose: 'UI styling' }
      ],
      learned: [
        'RBAC implementation',
        'RESTful API design',
        'Real-time sync'
      ],
      image: '/soar.png',
      githubUrl: 'https://github.com/zhyre/SOARSYSTEM',
      gradient: 'linear-gradient(135deg, #222 0%, #eee 100%)'
    },
    {
      id: 2,
      title: 'CitMedConnect+',
      tagline: 'Medical Appointment Management System',
      problem: 'Store owners lacked real-time visibility into sales metrics and inventory levels.',
      solution: 'Developed an interactive dashboard with live analytics and inventory tracking.',
      impact: 'Provides actionable insights, reducing stockouts by 40%.',
      role: 'Full-Stack Developer',
      contributions: [
        'Real-time analytics dashboard',
        'Inventory tracking system',
        'User authentication & roles'
      ],
      features: [
        'Real-time Appointments',
        'SecureMedical Records',
        'Real-time Notifications',
        'Appointment Calendar Tracker'
      ],
      metrics: {
        users: 'N/A',
        timeframe: '16 weeks',
        uptime: '99.9%'
      },
      technologies: [
        { name: 'Vue.js', purpose: 'UI components' },
        { name: 'Java', purpose: 'Database & auth' },
        { name: 'React', purpose: 'Styling' },
        { name: 'Chart.js', purpose: 'Data visualization' }
      ],
      learned: [
        'Real-time rendering',
        'State management',
        'Performance optimization'
      ],
      image: null,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'linear-gradient(135deg, #333 0%, #bbb 100%)'
    },
    {
      id: 3,
      title: 'Task Management App',
      tagline: 'Team Collaboration Platform',
      problem: 'Teams needed a simple tool for task assignment and progress tracking.',
      solution: 'Built a real-time task management app with team collaboration features.',
      impact: 'Improved team productivity by 40% with automated notifications.',
      role: 'Backend & Full-Stack Developer',
      contributions: [
        'RESTful API for task operations',
        'WebSocket for real-time updates',
        'Redis caching for performance'
      ],
      features: [
        'Real-time task updates',
        'Team collaboration',
        'Progress tracking',
        'Automated notifications'
      ],
      metrics: {
        teams: '50+ teams',
        tasks: '10K+ tasks',
        speed: '< 100ms'
      },
      technologies: [
        { name: 'Python', purpose: 'Backend logic' },
        { name: 'Django', purpose: 'REST API' },
        { name: 'PostgreSQL', purpose: 'Database' },
        { name: 'Redis', purpose: 'Caching' },
        { name: 'WebSockets', purpose: 'Live updates' }
      ],
      learned: [
        'WebSocket implementation',
        'Database caching',
        'Scalable API architecture'
      ],
      image: null,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'linear-gradient(135deg, #444 0%, #ccc 100%)'
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      tagline: 'Portfolio & Case Study Hub',
      problem: 'Needed a platform to showcase projects and skills to potential employers.',
      solution: 'Designed & built a modern, responsive portfolio with smooth animations.',
      impact: 'Professional online presence attracting recruiters and clients.',
      role: 'Full-Stack Developer & Designer',
      contributions: [
        'Modern UI/UX design',
        'Responsive React frontend',
        'Smooth animations & interactions'
      ],
      features: [
        'Animated hero section',
        'Project case studies',
        'Dark/Light theme',
        'Mobile-first design'
      ],
      metrics: {
        score: 'Lighthouse 95+',
        loadTime: '< 2 seconds',
        visitors: 'Growing'
      },
      technologies: [
        { name: 'React', purpose: 'UI components' },
        { name: 'Tailwind CSS', purpose: 'Styling' },
        { name: 'Framer Motion', purpose: 'Animations' },
        { name: 'Next.js', purpose: 'SSR & SEO' },
        { name: 'Vercel', purpose: 'Deployment' }
      ],
      learned: [
        'UI/UX principles',
        'Performance optimization',
        'SEO best practices'
      ],
      image: null,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'linear-gradient(135deg, #555 0%, #eee 100%)'
    }
  ];

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-section" ref={sectionRef}>
      <div className="grain-overlay"></div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>✕</button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <p className="modal-tagline">{selectedProject.tagline}</p>
            </div>

            <div className="modal-body">
              {/* Problem Solution Impact */}
              <section className="modal-section">
                <div className="psi-grid">
                  <div className="psi-box">
                    <h4>Problem</h4>
                    <p>{selectedProject.problem}</p>
                  </div>
                  <div className="psi-box">
                    <h4>Solution</h4>
                    <p>{selectedProject.solution}</p>
                  </div>
                  <div className="psi-box highlight">
                    <h4>Impact</h4>
                    <p>{selectedProject.impact}</p>
                  </div>
                </div>
              </section>

              {/* Role */}
              <section className="modal-section">
                <span className="modal-badge">{selectedProject.role}</span>
              </section>

              {/* Contributions */}
              <section className="modal-section">
                <h3>What We Built</h3>
                <ul className="contributions-list">
                  {selectedProject.contributions.map((contrib, idx) => (
                    <li key={idx}>{contrib}</li>
                  ))}
                </ul>
              </section>

              {/* Key Features */}
              <section className="modal-section">
                <h3>Key Features</h3>
                <div className="features-list">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">✓ {feature}</div>
                  ))}
                </div>
              </section>

              {/* Tech Stack */}
              <section className="modal-section">
                <h3>Tech Stack</h3>
                <div className="tech-grid">
                  {selectedProject.technologies.map((tech, idx) => (
                    <div key={idx} className="tech-card">
                      <div className="tech-name">{tech.name}</div>
                      <div className="tech-purpose">{tech.purpose}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* What I Learned */}
              <section className="modal-section">
                <h3>What I Learned</h3>
                <div className="learnings-list">
                  {selectedProject.learned.map((item, idx) => (
                    <span key={idx} className="learning-tag">{item}</span>
                  ))}
                </div>
              </section>

              {/* Metrics */}
              <section className="modal-section">
                <div className="metrics-grid">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="metric-card">
                      <div className="metric-value">{value}</div>
                      <div className="metric-label">{key.replace(/([A-Z])/g, ' $1').trim().toUpperCase()}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Links */}
              <section className="modal-section">
                <div className="modal-actions">
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-btn primary"
                  >
                    Source Code
                  </a>
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-btn secondary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
      
      <div className={`projects-container ${isVisible ? 'fade-in' : ''}`}>
        {/* Animated Background Gradient */}
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        
        {/* Header */}
        <div className="projects-header">
          <h2 className="gradient-text">Featured Projects</h2>
          <p className="projects-tagline">Building products that solve real problems</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Project Image/Gradient */}
              <div 
                className="project-image" 
                style={{ background: project.image ? `url(${project.image})` : project.gradient }}
              >
                {!project.image && (
                  <div className="project-placeholder">
                    <span className="project-badge">{project.tagline}</span>
                  </div>
                )}
              </div>
              
              <div className="project-info">
                {/* Title Section */}
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.tagline}</p>
                </div>

                {/* Role */}
                <div className="project-role">
                  <div className="role-badge">{project.role}</div>
                </div>

                {/* Contributions */}
                <div className="contributions">
                  <span className="contrib-label">What I Built:</span>
                  <ul className="contrib-list">
                    {project.contributions.map((contrib, idx) => (
                      <li key={idx}>{contrib}</li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <div className="project-features">
                  <span className="features-label">Key Features:</span>
                  <div className="features-grid">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="project-links">
                  <button 
                    className="project-link"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </button>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-secondary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;