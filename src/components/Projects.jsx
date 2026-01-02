import React from 'react';
import './Projects.css';

const Projects = () => {
  // Project data structure - Replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'SOAR: Student Organization Activity Resource',
      description: 'Web platform for managing student organizations, members, and events with role-based access control.',
      technologies: [
          'Python',
          'django',
          'JavaScript | CSS | Html',
          'Supabase'
      ],
      image: '/soar.png',
      githubUrl: 'https://github.com/zhyre/SOARSYSTEM',
      gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)'
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      description: 'Real-time sales and inventory management system for online stores.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: null,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
      image: null,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Responsive personal portfolio built with modern web technologies.',
      technologies: ['TypeScript', 'Next.js', 'GraphQL', 'Docker'],
      image: null,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <section className="section-container projects-section">
      {/* Animated Background - Same as Hero */}
      <div className="background-animations">
        {/* Left Arrow */}
        <div className="arrow-left">
          <svg viewBox="0 0 200 400">
            <defs>
              <linearGradient id="projectsLeftGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polyline
              points="180,50 20,200 180,350"
              fill="none"
              stroke="url(#projectsLeftGlow)"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Right Arrow */}
        <div className="arrow-right">
          <svg viewBox="0 0 200 400">
            <defs>
              <linearGradient id="projectsRightGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polyline
              points="20,50 180,200 20,350"
              fill="none"
              stroke="url(#projectsRightGlow)"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
      
      <div className="section-content">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A showcase of my recent work and achievements</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div 
                className="project-image" 
                style={{ background: project.image ? `url(${project.image})` : project.gradient }}
              >
                {!project.image && (
                  <div className="project-placeholder">
                    {project.title}
                  </div>
                )}
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Live
                  </a>
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
      {/* Gradient Overlay */}
      <div className="gradient-overlay" />
    </section>
  );
};

export default Projects;