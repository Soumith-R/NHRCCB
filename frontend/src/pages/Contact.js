import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        alert(data.message);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="office-info">
              <h3>Head Office</h3>
              <div className="office-details">
                <h4>NATIONAL HUMAN RIGHTS AND CRIME CONTROL BUREAU</h4>
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  Plot.No- 218, Second Floor, Malik Plaza, Block –A, Pocket -2, Sector, 17, Dwarka, New Delhi -110078
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  +91 9310694151, +91 9102224365
                </p>
              </div>
            </div>
            
            <div className="office-info">
              <h3>National Administration Office</h3>
              <div className="office-details">
                <h4>NATIONAL HUMAN RIGHTS AND CRIME CONTROL BUREAU</h4>
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  Quarter No. Ls/48, First Floor, Harmu Housing Colony Near Kartik Chowk, Ranchi, Jharkhand -834002
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  +91 9102224365
                </p>
              </div>
            </div>
            
            <div className="working-hours">
              <h3>Working Hours</h3>
              <ul>
                <li><span>Monday - Saturday</span> <span>10:00 AM - 5:00 PM</span></li>
                <li><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
            
            <div className="contact-methods">
              <h3>Get in Touch</h3>
              <div className="contact-links">
                <a href="mailto:nhrccb@gmail.com" className="contact-link">
                  <i className="fas fa-envelope"></i>
                  nhrccb@gmail.com
                </a>
                <a href="tel:+919310694151" className="contact-link">
                  <i className="fas fa-phone"></i>
                  +91 9310694151
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
