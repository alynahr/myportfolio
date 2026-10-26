import React, { useState } from 'react';
import { 
  IconMail, 
  IconCopy, 
  IconCheck, 
  IconArrowUpRight, 
  IconGithub, 
  IconLinkedin, 
  IconMapPin 
} from './Icons';

export const Contact = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer id="contact" className="contact-footer-section">
      <div className="container">
        
        {/* Simple & Friendly Contact Hero Box */}
        <div className="contact-hero-card">
          <div className="contact-header-meta">
            <div className="editorial-badge">
              <span className="status-beacon">
                <span className="status-beacon-dot"></span>
              </span>
              <span>GET IN TOUCH</span>
            </div>
            <div className="contact-location-tag">
              <IconMapPin size={13} />
              <span>{profile.location} • National University</span>
            </div>
          </div>

          <h2 className="contact-main-headline">
            Let's connect &amp; <em>collaborate</em> on systems &amp; web projects.
          </h2>

          <p className="contact-subtext">
            Whether you want to discuss system analysis, collaborate on university projects, or talk about internship opportunities, feel free to reach out!
          </p>

          {/* Interactive Email Module */}
          <div className="contact-email-box">
            <div className="email-address-display">
              <span className="email-icon">
                <IconMail size={20} />
              </span>
              <a href={`mailto:${profile.email}`} className="email-link">
                {profile.email}
              </a>
            </div>

            <div className="email-actions-group">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-copy-tactile"
                aria-label="Copy email address"
              >
                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>

              <a
                href={`mailto:${profile.email}`}
                className="btn-primary"
              >
                <span>Send Email</span>
                <IconArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Student Status Strip */}
          <div className="contact-time-strip">
            <div className="time-strip-item">
              <span className="time-icon">✦</span>
              <span className="time-label">STUDENT STATUS:</span>
              <span className="time-value">BSIT Student at National University (Class of 2028)</span>
            </div>

            <div className="time-strip-item">
              <span className="status-beacon">
                <span className="status-beacon-dot"></span>
              </span>
              <span className="time-label">AVAILABILITY:</span>
              <span className="time-value">Academic Collaborations &amp; Internships</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="footer-bottom-row">
          
          {/* Brand & Colophon */}
          <div className="footer-colophon">
            <div className="colophon-brand">
              <span className="brand-monogram-small">CR</span>
              <span className="colophon-name">{profile.fullName}</span>
            </div>
            <p className="colophon-text">
              Bachelor of Science in Information Technology • National University - Dasmarinas(NU), Class of 2028.
            </p>
            <div className="colophon-copyright">
              © 2026 Cielo Reyes. Built with React &amp; clean CSS.
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social-column">
            <div className="social-column-label">CONNECT WITH ME</div>
            <div className="social-links-grid">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-card"
              >
                <div className="social-icon-box">
                  <IconGithub size={18} />
                </div>
                <div className="social-link-info">
                  <span className="social-name">GitHub</span>
                  <span className="social-sub">Code &amp; Repos</span>
                </div>
                <div className="social-arrow">
                  <IconArrowUpRight size={14} />
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-card"
              >
                <div className="social-icon-box">
                  <IconLinkedin size={18} />
                </div>
                <div className="social-link-info">
                  <span className="social-name">LinkedIn</span>
                  <span className="social-sub">Professional</span>
                </div>
                <div className="social-arrow">
                  <IconArrowUpRight size={14} />
                </div>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="social-link-card"
              >
                <div className="social-icon-box">
                  <IconMail size={18} />
                </div>
                <div className="social-link-info">
                  <span className="social-name">Email</span>
                  <span className="social-sub">Direct Message</span>
                </div>
                <div className="social-arrow">
                  <IconArrowUpRight size={14} />
                </div>
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
