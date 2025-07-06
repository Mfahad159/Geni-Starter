import "./Header.css";

function Header() {
  return (
    <div className="header-main">
      <div className="header-left">
        {/* Placeholder for your logo or site title */}
        <span className="site-title">GenStart</span> 
      </div>
      <div className="header-middle">
        <div className="header-link contact-me">
          <img src="/assets/contactsvg.svg" className="mid-images" alt="Contact" />
          <span>Contact me</span>
        </div>
        <div className="header-link star-repo">
          <img src="/assets/starsvg.svg" alt="Star Repo" className="mid-images" />
          <span>Star Repo?</span>
        </div>
        <div className="header-link about-app">
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