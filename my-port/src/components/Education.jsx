import React from 'react';
import { IconClock, IconMapPin, IconSparkles } from './Icons';

export const Education = ({ education }) => {
  const coursework = [
    "Systems Analysis & Design (SAD)",
    "Database Management Systems (MySQL / DBMS)",
    "Object-Oriented Programming (OOP)",
    "Web Systems & Technologies",
    "Data Structures & Algorithms",
    "Human-Computer Interaction (HCI)",
    "Software Engineering Principles",
    "IT Project Management & Agile"
  ];

  return (
    <section id="education" className="section-spacing education-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <div className="section-meta-tag">Academic Background</div>
            <h2 className="section-title">
              Education &amp; <em>Learning</em> Journey
            </h2>
            <p className="section-subtitle">
              Currently building my academic foundation at National University, focusing on system architecture, database design, and software development.
            </p>
          </div>
        </div>

        {/* Dual Column: Education Timeline Left + Coursework Grid Right */}
        <div className="education-grid">
          
          {/* Left Column: Education Cards */}
          <div className="education-cards-column">
            {education.map((item, idx) => (
              <div key={idx} className="education-card">
                <div className="education-card-top">
                  <div className="institution-badge-wrap">
                    <span className="institution-badge">{item.institution}</span>
                    <span className="education-status">{item.status}</span>
                  </div>
                  <div className="education-meta">
                    <span className="meta-period">
                      <IconClock size={12} />
                      <span>{item.period}</span>
                    </span>
                    <span className="meta-loc">
                      <IconMapPin size={12} />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <h3 className="education-degree">{item.degree}</h3>
                <p className="education-desc">{item.description}</p>

                {item.highlights && (
                  <div className="education-highlights-box">
                    <span className="edu-highlights-title">Academic Highlights:</span>
                    <ul className="edu-highlights-list">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="edu-highlight-item">
                          <span className="edu-dash">—</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Relevant Coursework & Focus */}
          <div className="coursework-column">
            <div className="coursework-card">
              <div className="coursework-header">
                <IconSparkles size={16} />
                <h3 className="coursework-title">Relevant IT Coursework (2024–2028)</h3>
              </div>
              <p className="coursework-intro">
                Key subjects and theoretical concepts studied at National University:
              </p>

              <div className="coursework-list">
                {coursework.map((course, idx) => (
                  <div key={idx} className="coursework-item">
                    <span className="course-dot"></span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>

              <div className="learning-goal-box">
                <span className="goal-label">CAREER OBJECTIVE // 2028</span>
                <p className="goal-text">
                  To graduate as an adept System Analyst and System Designer capable of bridging technical engineering and business workflows with precision, empathy, and clear communication.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

