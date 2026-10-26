import React from 'react';
import { IconAward, IconCheck, IconExternalLink, IconSparkles } from './Icons';

export const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="section-spacing certifications-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <div className="section-meta-tag">Industry Credentials</div>
            <h2 className="section-title">
              Certifications &amp; <em>Accreditations</em>
            </h2>
            <p className="section-subtitle">
              Industry-recognized credentials validating project management rigor, systems analysis, and agile methodologies.
            </p>
          </div>
        </div>

        {/* Certifications Showcase */}
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <article key={cert.id} className="certification-card">
              
              {/* Card Top Strip */}
              <div className="cert-card-header">
                <div className="cert-badge-wrap">
                  <div className="cert-icon-box">
                    <IconAward size={26} />
                  </div>
                  <div className="cert-issuer-info">
                    <span className="cert-org-name">{cert.organization}</span>
                    <span className="cert-status-chip">
                      <span className="status-beacon">
                        <span className="status-beacon-dot"></span>
                      </span>
                      <span>{cert.status}</span>
                    </span>
                  </div>
                </div>

                <div className="cert-credly-badge">
                  <span>CREDLY VERIFIED</span>
                </div>
              </div>

              {/* Card Main Body */}
              <div className="cert-card-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-credential-name">{cert.credentialName}</p>

                <p className="cert-description">{cert.description}</p>

                {/* Verified Competencies */}
                <div className="cert-competencies-box">
                  <h4 className="competencies-heading">
                    <IconSparkles size={15} />
                    <span>Verified Core Competencies:</span>
                  </h4>
                  <ul className="competencies-list">
                    {cert.competencies.map((comp, idx) => (
                      <li key={idx} className="competency-item">
                        <span className="comp-check-icon">
                          <IconCheck size={13} />
                        </span>
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Credly Verification Action */}
                <div className="cert-action-footer">
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-credly-verify"
                    aria-label="Verify PMI badge on Credly (opens in new tab)"
                  >
                    <span>Verify Badge on Credly</span>
                    <IconExternalLink size={16} />
                  </a>

                  <div className="credly-seal-note">
                    <span className="seal-text">Official Digital Badge via Credly</span>
                  </div>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

