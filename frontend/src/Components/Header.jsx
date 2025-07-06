import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFactModal, setShowFactModal] = useState(false);
  const [currentFact, setCurrentFact] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Trigger animation after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAboutClick = () => {
    if (onNavigate) {
      onNavigate('about');
    }
  };

  return (
    <div className={`header-main ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-left">
        <span className="site-title">GenStart</span>
      </div>
      <div className={`header-middle ${isScrolled ? 'header-middle-collapsed' : ''}`}>
        <a
          href="mailto:mianfahad664@gmail.com"
          className="header-link contact-me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/contactsvg.svg" className="mid-images" alt="Contact" />
          <span className="header-link-text">Contact me</span>
        </a>

        <a
          href="https://github.com/Mfahad159/Geni-Starter"
          className="header-link star-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/starsvg.svg" alt="Star Repo" className="mid-images" />
          <span className="header-link-text">Star Repo?</span>
        </a>

        <div
          className="header-link about-app"
          onClick={handleAboutClick}
          role="button"
          tabIndex="0"
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleAboutClick();
            }
          }}
        >
          <img src="/assets/aboutapp.svg" alt="About this tool" className="mid-images" />
          <span className="header-link-text">About this tool</span>
        </div>
      </div>
      <div className={`header-right ${isScrolled ? 'header-right-collapsed' : ''}`}>
        <button 
          className="cta-button"
          onClick={() => {
            // Fun easter egg - show a random startup fact
            const facts = [
              "Did you know? Airbnb started with just 3 air mattresses!",
              "Fun fact: WhatsApp was rejected by Facebook in 2009",
              "Crazy stat: 90% of startups fail, but 100% of non-starters fail!",
              "Quick tip: The best time to start was yesterday, the second best is now!",
              "Random fact: The word 'startup' was first used in 1976",
              "Fun fact: Instagram was built in just 8 weeks!",
              "Did you know? Slack started as a gaming company",
              "Crazy stat: 1 in 3 unicorns started in a garage!",
              "Fun fact: Tesla was almost called 'Faraday'",
              "Random tip: Your next big idea is just one prompt away!"
            ];
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            setCurrentFact(randomFact);
            setShowFactModal(true);
          }}
          style={{
            background: 'linear-gradient(45deg, #a07dff, #8c68e0, #7c3aed)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 3s ease infinite',
            border: 'none',
            borderRadius: '20px',
            padding: '10px 20px',
            color: 'white',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          Random Fact
        </button>
      </div>

      {/* Custom Themed Fact Modal */}
      {showFactModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            backdropFilter: 'blur(5px)'
          }}
          onClick={() => setShowFactModal(false)}
        >
          <div 
            style={{
              backgroundColor: 'rgba(30, 30, 30, 0.95)',
              border: '1px solid rgba(160, 125, 255, 0.3)',
              borderRadius: '20px',
              padding: '30px',
              maxWidth: '500px',
              width: '90vw',
              textAlign: 'center',
              position: 'relative',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              animation: 'slideFromTop 0.4s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowFactModal(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'rgba(160, 125, 255, 0.1)',
                border: '1px solid rgba(160, 125, 255, 0.3)',
                color: '#a07dff',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '8px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                fontFamily: "'Segoe UI', sans-serif",
                fontWeight: 'bold'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(160, 125, 255, 0.2)';
                e.target.style.borderColor = '#a07dff';
                e.target.style.transform = 'scale(1.1)';
                e.target.innerHTML = '✕';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(160, 125, 255, 0.1)';
                e.target.style.borderColor = 'rgba(160, 125, 255, 0.3)';
                e.target.style.transform = 'scale(1)';
                e.target.innerHTML = '×';
              }}
            >
              ×
            </button>

            {/* Fact Content */}
            <p style={{
              color: '#e0e0e0',
              fontSize: '16px',
              lineHeight: '1.6',
              margin: '0',
              fontFamily: "'Segoe UI', sans-serif",
              paddingTop: '10px'
            }}>
              {currentFact}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideFromTop {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
