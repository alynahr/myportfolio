import React, { useState, useEffect } from 'react';

export const Navbar = ({ profile }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar-container" aria-label="Main Navigation">
          {/* Monogram / Brand */}
          <a href="#hero" className="navbar-brand">
            <span className="brand-monogram">{profile.monogram}</span>
            <span className="brand-name">
              <span className="brand-primary">{profile.name}</span>
              <span className="brand-sub">BSIT • National University</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="navbar-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-open-top' : ''}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-open-mid' : ''}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-open-bottom' : ''}`}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-items">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
