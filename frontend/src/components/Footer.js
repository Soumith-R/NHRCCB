import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>ABOUT US</h3>
              <p>
                The National Human Rights and Crime Control Bureau (NHRCCB) is functioning with
                a commitment to the noble cause of human rights protection and promotion,
                justice, education, love, peace, harmony for all, friendship, and national and
                international integration through the exchange of ideas and ethos around the nation.
              </p>
              <div className="social-links">
                <a href="https://www.youtube.com/channel/UCJvCufQ4ARy84rZAQC2N0Kw" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://t.me/nhrccb" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="https://twitter.com/nhrccb" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/nhrccb" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/nhrccbindia" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="mailto:nhrccb@gmail.com">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>QUICK LINKS</h3>
              <ul>
                <li><Link to="/monthly-report">Monthly Report</Link></li>
                <li><Link to="/annual-report">Annual Report</Link></li>
                <li><Link to="/souvenir">Souvenir</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/join-us">Join Us</Link></li>
                <li><Link to="/term-condition">Term & Condition</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>CONTACT US</h3>
              <div className="contact-info">
                <h4>Head Office</h4>
                <p><strong>NATIONAL HUMAN RIGHTS AND CRIME CONTROL BUREAU</strong></p>
                <p>Plot.No- 218, Second Floor, Malik Plaza, Block –A, Pocket -2, Sector, 17, Dwarka, New Delhi -110078</p>
                <p>Phone: +91 9310694151, +91 9102224365</p>
                
                <h4>National Administration Office</h4>
                <p><strong>NATIONAL HUMAN RIGHTS AND CRIME CONTROL BUREAU</strong></p>
                <p>Quarter No. Ls/48, First Floor, Harmu Housing Colony Near Kartik Chowk, Ranchi, Jharkhand -834002</p>
                <p>Phone: +91 9102224365</p>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>WORKING HOURS</h3>
              <ul className="working-hours">
                <li><span>Monday</span> <span>10:00 AM - 5:00 PM</span></li>
                <li><span>Tuesday</span> <span>10:00 AM - 5:00 PM</span></li>
                <li><span>Wednesday</span> <span>10:00 AM - 5:00 PM</span></li>
                <li><span>Thursday</span> <span>10:00 AM - 5:00 PM</span></li>
                <li><span>Friday</span> <span>10:00 AM - 5:00 PM</span></li>
                <li><span>Saturday</span> <span>10:00 AM - 5:00 PM</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>
              Copyrights © 2025 ALL RIGHTS RESERVED BY NATIONAL HUMAN RIGHTS AND CRIME CONTROL BUREAU | 
              Design by <a href="https://www.jharkhanditservices.com/" target="_blank" rel="noopener noreferrer">
                Jharkhand IT Services Software Pvt. Ltd.
              </a>
            </p>
            <div className="footer-social">
              <a href="https://www.youtube.com/channel/UCJvCufQ4ARy84rZAQC2N0Kw" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.facebook.com/nhrccb" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/nhrccb" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/nhrccbindia" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
