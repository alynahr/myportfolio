import React from 'react';
import { IconCheck, IconLayers, IconSparkles } from './Icons';

export const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section-spacing projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <div className="section-meta-tag">Featured Project</div>
            <h2 className="section-title">
              Featured <em>Real-World</em> Project
            </h2>
            <p className="section-subtitle">
              A comprehensive web-based gym management and class booking system engineered with React, Supabase, Google Auth, and Stripe.
            </p>
          </div>
        </div>

        {/* Featured Projects Display */}
        <div className="projects-showcase-container">
          {projects.map((project) => (
            <article key={project.id} className="flagship-project-card">
              
              {/* Centered & Compact Screenshot Frame */}
              <div className="flagship-media-wrapper">
                <div className="media-browser-container">
                  <div className="media-browser-bar">
                    <div className="browser-dots">
                      <span className="b-dot"></span>
                      <span className="b-dot"></span>
                      <span className="b-dot"></span>
                    </div>
                    <div className="browser-address-bar">
                      <span>https://fitpulse-mauve.vercel.app</span>
                    </div>
                  </div>

                  <div className="media-image-container">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.subtitle}`}
                      className="flagship-image"
                      loading="lazy"
                    />
                    <div className="media-overlay-gradient"></div>
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="flagship-content-wrapper">
                
                {/* Meta Header */}
                <div className="flagship-meta-row">
                  <span className="editorial-badge">{project.badge}</span>
                  <span className="flagship-cat-text">{project.category}</span>
                </div>

                <h3 className="flagship-title">{project.title}</h3>
                <p className="flagship-subtitle">{project.subtitle}</p>

                <p className="flagship-description">{project.description}</p>

                {/* Key Architectural Features Grid */}
                <div className="flagship-features-section">
                  <h4 className="features-section-heading">
                    <IconSparkles size={16} />
                    <span>System Architecture &amp; Core Modules</span>
                  </h4>

                  <div className="features-cards-grid">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="feature-card-item">
                        <div className="feature-item-header">
                          <span className="feature-check-icon">
                            <IconCheck size={14} />
                          </span>
                          <span className="feature-item-title">{feat.title}</span>
                        </div>
                        <p className="feature-item-desc">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="flagship-tech-footer">
                  <span className="tech-footer-label">Tech Stack:</span>
                  <div className="project-tags-row">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="projects-bottom-note">
          <IconLayers size={16} />
          <span>Interested in seeing a system demo or reviewing the architecture? <a href="#contact" className="link-underlined">Get in touch</a>.</span>
        </div>

      </div>
    </section>
  );
};
