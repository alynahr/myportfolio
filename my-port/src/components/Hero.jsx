import React, { useState } from 'react';
import { IconArrowRight, IconArrowDown, IconCheck, IconCopy, IconMapPin } from './Icons';

export const Hero = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* Main Hero Column */}
          <div className="hero-content">
            {/* Status Pill */}
            <div className="hero-badges-row">
              <div className="editorial-badge">
                <span className="status-beacon">
                  <span className="status-beacon-dot"></span>
                </span>
                <span>{profile.statusText}</span>
              </div>
              <div className="editorial-badge hero-badge-location">
                <IconMapPin size={13} />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Editorial Headline */}
            <h1 className="hero-headline">
              Hi, I'm Cielo. A <em>System Designer</em> &amp; Systems Analyst.
            </h1>

            {/* Concise Bio */}
            <p className="hero-bio">
              {profile.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions-row">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <IconArrowRight size={16} />
              </a>

              <a href="#about" className="btn-outline">
                <span>About My Journey</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-quick-copy"
                title="Copy email address"
              >
                {copied ? <IconCheck size={15} /> : <IconCopy size={15} />}
                <span>{copied ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Quick focus tags */}
            <div className="hero-whisper">
              <span className="whisper-icon">✦</span>
              <span>Primary Focus: System Design &amp; Analysis • PMI Certified • Full-Stack Development (React &amp; Supabase)</span>
            </div>
          </div>

          {/* Simple Student Profile Card */}
          <div className="hero-specimen-column">
            <div className="specimen-card">
              {/* Header */}
              <div className="specimen-header">
                <div className="specimen-dots">
                  <span className="specimen-dot dot-warm"></span>
                  <span className="specimen-dot"></span>
                  <span className="specimen-dot"></span>
                </div>
                <div className="specimen-id">STUDENT PROFILE // NU-2028</div>
              </div>

              {/* Profile Block with User Photo */}
              <div className="specimen-profile-block">
                <div className="specimen-photo-frame">
                  <img
                    src={profile.photo || "/mypic.png"}
                    alt={profile.fullName}
                    className="specimen-photo-img"
                  />
                </div>
                <div className="specimen-meta">
                  <h3 className="specimen-name">{profile.fullName}</h3>
                  <p className="specimen-title">{profile.role}</p>
                  <span className="specimen-pmi-chip">PMI Certified</span>
                </div>
              </div>

              {/* Stats List */}
              <div className="specimen-metrics-grid">
                {profile.stats.map((item, idx) => (
                  <div key={idx} className="specimen-metric-item">
                    <span className="metric-label">{item.label}</span>
                    <span className="metric-value-student">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="specimen-footer">
                <span className="specimen-stamp">NATIONAL UNIVERSITY - Dasmarinas (NU-D)</span>
                <span className="specimen-beacon">● ACTIVE ENROLLMENT</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Prompt */}
        <div className="hero-scroll-cue">
          <a href="#about" className="scroll-cue-link" aria-label="Scroll to about section">
            <span className="scroll-cue-text">Explore Portfolio</span>
            <IconArrowDown size={14} className="scroll-cue-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};
