// src/components/AboutAppDrawer/AboutAppDrawer.jsx
import React from 'react';
import './AboutAppDrawer.css';

/**
 * AboutAppDrawer Component
 * A side drawer that slides in from the left, displaying information about the application.
 *
 * Props:
 * - isOpen (boolean): Controls the visibility of the drawer.
 * - onClose (function): Callback function to close the drawer.
 */
function AboutAppDrawer({ isOpen, onClose }) {
  // If the drawer is not open, don't render anything to avoid unnecessary DOM elements
  if (!isOpen) {
    return null;
  }

  return (
    // The overlay darkens the background and handles clicks outside the drawer to close it
    <div className="drawer-overlay" onClick={onClose}>
      {/* The main drawer content area */}
      {/* Stop propagation to prevent clicks inside the drawer from closing it */}
      <div className="about-app-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h2>About AI Idea Generator</h2>
          {/* Close button for the drawer */}
          <button className="close-button" onClick={onClose}>
            &times; {/* HTML entity for a multiplication sign, commonly used for close icons */}
          </button>
        </div>
        <div className="drawer-content">
          <p>
            <strong>App Name:</strong> AI Idea Generator
          </p>
          <p>
            <strong>Purpose:</strong> This tool leverages artificial intelligence to spark creativity and generate innovative ideas across various niches and trends. Whether you're a content creator, entrepreneur, or just looking for inspiration, our AI can help you brainstorm and discover new concepts.
          </p>
          <p>
            <strong>Key Features:</strong>
            <ul>
              <li>AI-powered idea generation based on user input.</li>
              <li>Intuitive and user-friendly interface.</li>
              <li>Quick and relevant idea suggestions.</li>
              <li>Designed for creative professionals and hobbyists alike.</li>
            </ul>
          </p>
          <p>
            <strong>Version:</strong> 1.0.0
          </p>
          <p>
            <strong>Developer:</strong> Your Name / Company Name (Placeholder)
          </p>
          <p>
            We hope this tool helps you unlock your next big idea!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutAppDrawer;