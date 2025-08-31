import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span><i className="fas fa-phone"></i> +91 9310694151</span>
              <span><i className="fas fa-envelope"></i> nhrccb@gmail.com</span>
            </div>
            <div className="top-bar-buttons">
              <Link to="/join-us" className="btn-small">Join Us</Link>
              <Link to="/donation" className="btn-small">Donation</Link>
              <Link to="/complaint" className="btn-small">Complaint Us</Link>
              <Link to="/verify" className="btn-small">Verify</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src="/logo.png" alt="NHRCCB Logo" />
              <div className="logo-text">
                <h1>NHRCCB</h1>
                <p>National Human Rights and Crime Control Bureau</p>
              </div>
            </div>
            
            <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li className="dropdown">
                  <span>About us <i className="fas fa-chevron-down"></i></span>
                  <ul className="dropdown-menu">
                    <li><Link to="/organisation">Organisation</Link></li>
                    <li><Link to="/mission-vision">Mission/Vision</Link></li>
                    <li><Link to="/rules">Act/Rules</Link></li>
                    <li><Link to="/recognitions">Recognitions</Link></li>
                    <li><Link to="/collaboration">Collaboration</Link></li>
                    <li><Link to="/president-profile">National President Profile</Link></li>
                    <li><Link to="/president-message">National President Message</Link></li>
                    <li><Link to="/whos-who">Who's Who</Link></li>
                    <li><Link to="/national-patron">National Patron / Advisor</Link></li>
                    <li><Link to="/national-executive">National Executive</Link></li>
                    <li><Link to="/state-president">State President</Link></li>
                    <li><Link to="/officials">Officials</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span>Our Works <i className="fas fa-chevron-down"></i></span>
                  <ul className="dropdown-menu">
                    <li><Link to="/human-rights">Human Rights</Link></li>
                    <li><Link to="/women-rights">Women Rights</Link></li>
                    <li><Link to="/child-rights">Child Rights</Link></li>
                    <li><Link to="/consumer-rights">Consumer Rights</Link></li>
                    <li><Link to="/right-to-information">Rights to Information</Link></li>
                    <li><Link to="/disability-rights">Disability Rights</Link></li>
                    <li><Link to="/right-to-education">Right to Education</Link></li>
                    <li><Link to="/advocate-rights">Advocate Rights</Link></li>
                    <li><Link to="/lgbt-rights">LGBT Rights</Link></li>
                    <li><Link to="/doctor-rights">Doctor Rights</Link></li>
                    <li><Link to="/tribal-rights">Tribal Rights</Link></li>
                    <li><Link to="/press-rights">Press Rights</Link></li>
                    <li><Link to="/crime-control">Crime Control Act</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span>Publication <i className="fas fa-chevron-down"></i></span>
                  <ul className="dropdown-menu">
                    <li><Link to="/annual-report">Annual Report</Link></li>
                    <li><Link to="/monthly-report">Monthly Report</Link></li>
                    <li><Link to="/official-notification">Official/Notification</Link></li>
                    <li><Link to="/convocation-report">Convocation Report</Link></li>
                    <li><Link to="/prospectus">Prospectus</Link></li>
                    <li><Link to="/souvenir">Souvenir</Link></li>
                    <li><Link to="/journal">Journal</Link></li>
                    <li><Link to="/rulebook">Rulebook</Link></li>
                    <li><Link to="/books">Books</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span>Media <i className="fas fa-chevron-down"></i></span>
                  <ul className="dropdown-menu">
                    <li><Link to="/acknowledgement">Acknowledgement</Link></li>
                    <li><Link to="/govt-letters">Govt. Letters</Link></li>
                    <li><Link to="/officer-interaction">Officer Interaction</Link></li>
                    <li><Link to="/action-taken-report">Action Take Report</Link></li>
                    <li><Link to="/print-media">Print Media</Link></li>
                    <li><Link to="/web-media">Web Media</Link></li>
                    <li><Link to="/event-gallery">Event Gallery</Link></li>
                    <li><Link to="/video-gallery">Video Gallery</Link></li>
                    <li><Link to="/press-release">Press Release</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span>Activities <i className="fas fa-chevron-down"></i></span>
                  <ul className="dropdown-menu">
                    <li><Link to="/awards">Awards</Link></li>
                    <li><Link to="/seminar">Seminar</Link></li>
                    <li><Link to="/workshop">Workshop</Link></li>
                    <li><Link to="/social-works">Social Works</Link></li>
                    <li><Link to="/stand-with-nation">Stand with Nation</Link></li>
                    <li><Link to="/rural-awareness">Rural Awareness</Link></li>
                    <li><Link to="/covid-19">Covid-19</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact us</Link></li>
              </ul>
            </nav>

            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
