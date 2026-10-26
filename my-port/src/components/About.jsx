import React from 'react';
import { IconLayers, IconSparkles, IconCode } from './Icons';

export const About = ({ profile }) => {
  return (
    <section id="about" className="section-spacing about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <div className="section-meta-tag">About Me</div>
            <h2 className="section-title">
              Driven by <em>curiosity</em>, systems, &amp; clean design
            </h2>
            <p className="section-subtitle">
              Get to know my background as an IT student at National University and what excites me about system design and frontend development.
            </p>
          </div>
        </div>

        {/* About Main Card */}
        <div className="about-narrative-card">
          <div className="about-text-content">
            {profile.aboutText.map((paragraph, idx) => (
              <p key={idx} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-pillars-grid">
            <div className="about-pillar-box">
              <div className="pillar-icon-box">
                <IconLayers size={20} />
              </div>
              <h4 className="pillar-heading">Systems Analysis</h4>
              <p className="pillar-description">
                Structuring data flow, writing requirements, and drawing UML &amp; ERD diagrams so systems are logical and maintainable.
              </p>
            </div>

            <div className="about-pillar-box">
              <div className="pillar-icon-box">
                <IconSparkles size={20} />
              </div>
              <h4 className="pillar-heading">User-Centered Design</h4>
              <p className="pillar-description">
                Creating intuitive Figma prototypes and wireframes that prioritize ease-of-use and clear navigation.
              </p>
            </div>

            <div className="about-pillar-box">
              <div className="pillar-icon-box">
                <IconCode size={20} />
              </div>
              <h4 className="pillar-heading">Frontend Building</h4>
              <p className="pillar-description">
                Translating design prototypes into clean, responsive web code using React, JavaScript, and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

