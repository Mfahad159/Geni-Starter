import React, { useState } from "react";
import "./FloatingMenu.css";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Icon Button */}
      {!open && (
        <button
          title="Meet Developer"
          className="floating-meet-dev-btn"
          onClick={() => setOpen(true)}
          aria-label="Open Meet the Developer"
        >
          <img
            src="/assets/bulb-svgrepo-com.svg"
            alt="Meet the Developer"
            style={{ width: 28, height: 28 }}
          />
        </button>
      )}
      {/* Floating Card */}
      <div className={`floating-meet-dev-card${open ? "" : " closed"}`}>
        <button className="close-btn" onClick={() => setOpen(false)} title="Close">&times;</button>
        <div className="dev-header">
          <div className="dev-info">
            <div className="dev-name">Muhammmad Fahad</div>
            <div className="dev-role">GenAi & Full Stack Developer</div>
          </div>
          <img
            className="dev-avatar"
            src="/assets/bulb-svgrepo-com.svg"
            alt="Developer"
          />
        </div>
        <div>Let's connect!</div>
        <div className="social-row">
          <a
            className="social-btn linkedin"
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" fill="currentColor" style={{marginRight: 4}}><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2a4 4 0 0 1 2-2zm-12 0h4v12h-4zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>
            LinkedIn
          </a>
          <a
            className="social-btn github"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" fill="currentColor" style={{marginRight: 4}} viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingMenu;