import React from 'react';
import './App.css';
import { portfolioData } from './data/portfolioData';
import { NoiseOverlay } from './components/NoiseOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="portfolio-app-root">
      {/* Soft Texture Overlay */}
      <NoiseOverlay />

      {/* Clean Sticky Header */}
      <Navbar profile={portfolioData.profile} />

      <main>
        {/* Friendly Hero Introduction */}
        <Hero profile={portfolioData.profile} />

        {/* About Me Section */}
        <About profile={portfolioData.profile} />

        {/* Industry Certifications & Credentials */}
        <Certifications certifications={portfolioData.certifications} />

        {/* Featured Projects */}
        <Projects projects={portfolioData.projects} />

        {/* Education & Academic Journey */}
        <Education education={portfolioData.education} />
      </main>

      {/* Simple & Clear Contact Footer */}
      <Contact profile={portfolioData.profile} />
    </div>
  );
}

export default App;
