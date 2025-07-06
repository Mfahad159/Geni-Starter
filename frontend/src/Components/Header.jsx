import "./Header.css";

// Assuming you might pass a function to handle navigation for "About this tool"
// If this Header is part of a larger routing system (e.g., React Router),
// you would use Link components or history.push() instead of an onNavigate prop.
function Header({ onNavigate }) {
  const handleAboutClick = () => {
    if (onNavigate) {
      onNavigate('about'); // Call the navigation handler with a specific route/component name
    }
    // In a real application with React Router, you might use:
    // history.push('/about');
  };

  return (
    <div className="header-main">
      <div className="header-left">
        {/* Placeholder for your logo or site title */}
        <span className="site-title">GenStart</span>
      </div>
      <div className="header-middle">
        {/* Contact Me Link: Opens Gmail with a mailto link */}
        <a
          href="mailto:mianfahad664@gmail.com" // Replace with your actual email address
          className="header-link contact-me"
          target="_blank" // Opens in a new tab/window
          rel="noopener noreferrer" // Recommended for security with target="_blank"
        >
          <img src="/assets/contactsvg.svg" className="mid-images" alt="Contact" />
          <span>Contact me</span>
        </a>

        {/* Star Repo Link: Opens GitHub repository in a new tab */}
        <a
          href="https://github.com/Mfahad159/Geni-Starter" // Replace with your actual GitHub repo link
          className="header-link star-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/starsvg.svg" alt="Star Repo" className="mid-images" />
          <span>Star Repo?</span>
        </a>

        {/* About This Tool: Triggers navigation to another component/view */}
        {/* This will call the onNavigate prop passed from a parent component */}
        <div
          className="header-link about-app"
          onClick={handleAboutClick}
          role="button" // Indicate that this div is interactive
          tabIndex="0" // Make it focusable for accessibility
          onKeyPress={(e) => { // Allow keyboard interaction (e.g., Enter key)
            if (e.key === 'Enter' || e.key === ' ') {
              handleAboutClick();
            }
          }}
        >
          <img src="/assets/aboutapp.svg" alt="About this tool" className="mid-images" />
          <span>About this tool</span>
        </div>
      </div>
      <div className="header-right">
        {/* Example button */}
        <button className="cta-button">Login / Signup</button>
      </div>
    </div>
  );
}

export default Header;
