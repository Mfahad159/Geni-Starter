import React from "react";
import "./AboutAppDrawer.css";

const AboutAppDrawer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="about-drawer-overlay" onClick={onClose}>
      <div className="about-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="about-drawer-header">
          <h2 className="about-drawer-title">About GenStart</h2>
          <button className="about-drawer-close" onClick={onClose}>
            ×
          </button>
        </div>
        
        <div className="about-drawer-content">
          <div className="about-section">
            <h3 className="about-section-title">What is GenStart?</h3>
            <p className="about-section-text">
              GenStart is an AI-powered startup idea generator that helps entrepreneurs, 
              developers, and innovators discover unique business opportunities. Using advanced 
              AI algorithms, it analyzes market trends and generates comprehensive startup 
              ideas with detailed business plans.
            </p>
          </div>

          <div className="about-section">
            <h3 className="about-section-title">How it Works</h3>
            <p className="about-section-text">
              Simply describe your interests, industry preferences, or specific problems 
              you'd like to solve. Our AI will generate innovative startup ideas complete 
              with problem analysis, solution strategies, target audience identification, 
              and business models.
            </p>
          </div>

          <div className="about-section">
            <h3 className="about-section-title">Features</h3>
            <ul className="about-features-list">
              <li>AI-powered idea generation</li>
              <li>Comprehensive business analysis</li>
              <li>Target audience identification</li>
              <li>Technology stack recommendations</li>
              <li>Marketing strategy suggestions</li>
              <li>Potential impact assessment</li>
            </ul>
          </div>

          <div className="about-section">
            <h3 className="about-section-title">Get Started</h3>
            <p className="about-section-text">
              Ready to discover your next big idea? Use the form above to describe your 
              interests or the problems you want to solve, and let our AI generate 
              innovative startup concepts tailored just for you.
            </p>
          </div>

          <div className="about-footer">
            <p className="about-footer-text">
              Built with ❤️ by the GenStart team
            </p>
            <div className="about-footer-links">
              <a 
                href="https://github.com/Mfahad159/Geni-Starter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="about-footer-link"
              >
                View on GitHub
              </a>
              <a 
                href="mailto:mianfahad664@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="about-footer-link"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAppDrawer;
