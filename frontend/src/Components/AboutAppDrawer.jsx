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
              GenStart is an advanced AI-powered startup idea generator that leverages multiple 
              cutting-edge AI models to help entrepreneurs, developers, and innovators discover 
              unique business opportunities. Our system uses Claude 3.5 Sonnet and GPT-3.5 Turbo 
              to analyze market trends and generate comprehensive startup ideas with detailed 
              business plans.
            </p>
          </div>

          <div className="about-section">
            <h3 className="about-section-title">How it Works</h3>
            <p className="about-section-text">
              Simply describe your interests, industry preferences, or specific problems 
              you'd like to solve. Our multi-AI system will intelligently analyze your input 
              and generate innovative startup ideas complete with problem analysis, solution 
              strategies, target audience identification, and comprehensive business models.
            </p>
          </div>

          <div className="about-section">
            <h3 className="about-section-title">AI Technology</h3>
            <ul className="about-features-list">
              <li>Multi-model AI system (Claude 3.5 Sonnet + GPT-3.5 Turbo)</li>
              <li>Intelligent fallback mechanisms for reliability</li>
              <li>Advanced market trend analysis</li>
              <li>Structured business plan generation</li>
              <li>Real-time idea validation</li>
            </ul>
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
              <li>Risk and challenge analysis</li>
              <li>Unique selling proposition development</li>
            </ul>
          </div>

          <div className="about-section">
            <h3 className="about-section-title">Get Started</h3>
            <p className="about-section-text">
              Ready to discover your next big idea? Use the form above to describe your 
              interests or the problems you want to solve, and let our advanced AI system 
              generate innovative startup concepts tailored just for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAppDrawer;
