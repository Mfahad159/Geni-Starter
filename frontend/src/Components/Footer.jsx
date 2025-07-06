import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer style={{
      backgroundColor: 'rgba(30, 30, 30, 0.85)',
      borderTop: '1px solid rgba(160, 125, 255, 0.2)',
      padding: '12px 0',
      textAlign: 'center',
      fontFamily: "'Segoe UI', sans-serif",
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px'
      }}>
        {/* Main copyright line */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <span style={{
            color: '#e0e0e0',
            fontSize: '14px',
            fontWeight: '400'
          }}>
            © {currentYear}
          </span>
          <span style={{
            color: '#a07dff',
            fontSize: '14px',
            fontWeight: '600'
          }}>
            GenStart
          </span>
          <span style={{
            color: '#e0e0e0',
            fontSize: '14px',
            fontWeight: '400'
          }}>
            All Rights Reserved
          </span>
        </div>

        {/* Secondary info line */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <span style={{
            color: '#a3a3a3',
            fontSize: '12px',
            fontWeight: '400'
          }}>
            {currentDate}
          </span>
        </div>

        {/* Additional info line */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '2px'
        }}>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
