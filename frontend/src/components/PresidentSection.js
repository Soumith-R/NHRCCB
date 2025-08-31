import React from 'react';
import '../styles/PresidentSection.css';

const PresidentSection = () => {
  return (
    <section className="president-section">
      <div className="container">
        <h2>National President</h2>
        <div className="president-content">
          <div className="president-image">
            <img src="/president-photo.jpg" alt="National President" />
          </div>
          <div className="president-message">
            <p>
              The Preamble of our Constitution emphasizes on justice, liberty, equality and
              fraternity. These four words cover the entire range of human rights. Human rights
              are standards that recognize and protect the dignity of all human beings.
            </p>
            <p>
              Human rights recognize our freedom to choose, develop and live without fear or
              discrimination. The purpose of human rights is to provide freedom to live a life
              free from fear, oppression or discrimination. Human rights include the right to
              life, the right to a fair trial, freedom from torture, freedom of speech,
              freedom of religion, and the rights to health, education and an adequate standard of
              living.
            </p>
            <p>
              The concept of human rights is very important in our lives, especially in
              today's time when human exploitation is increasing day by day. To understand the basic
              rights of human beings, it is very important to propagate them, it is very
              important to reach the human rights to the person standing at the last rung of the
              society. From time to time, many seminars, conferences, workshops and trainings
              are very inspiring for the colleagues and people of the society working in the
              field of human rights.
            </p>
            <a href="/president-message" className="read-more-btn">READ MORE</a>
          </div>
        </div>
        
        <div className="president-galleries">
          <div className="gallery-section">
            <h3>ACKNOWLEDGEMENT</h3>
            <div className="gallery-grid">
              <img src="/acknowledgement1.jpg" alt="Acknowledgement 1" />
              <img src="/acknowledgement2.jpg" alt="Acknowledgement 2" />
              <img src="/acknowledgement3.jpg" alt="Acknowledgement 3" />
              <img src="/acknowledgement4.jpg" alt="Acknowledgement 4" />
              <img src="/acknowledgement5.jpg" alt="Acknowledgement 5" />
              <img src="/acknowledgement6.jpg" alt="Acknowledgement 6" />
            </div>
            <a href="/acknowledgement" className="view-all-btn">VIEW ALL</a>
          </div>
          
          <div className="gallery-section">
            <h3>GOVT. LETTER</h3>
            <div className="gallery-grid">
              <img src="/govt-letter1.jpg" alt="Government Letter 1" />
              <img src="/govt-letter2.jpg" alt="Government Letter 2" />
              <img src="/govt-letter3.jpg" alt="Government Letter 3" />
              <img src="/govt-letter4.jpg" alt="Government Letter 4" />
              <img src="/govt-letter5.jpg" alt="Government Letter 5" />
              <img src="/govt-letter6.jpg" alt="Government Letter 6" />
            </div>
            <a href="/govt-letters" className="view-all-btn">VIEW ALL</a>
          </div>
          
          <div className="gallery-section">
            <h3>MONTHLY REPORT</h3>
            <div className="report-links">
              <a href="/reports/monthly-report-2024-01.pdf" className="pdf-link">VIEW PDF</a>
              <a href="/reports/monthly-report-2023-12.pdf" className="pdf-link">VIEW PDF</a>
              <a href="/reports/monthly-report-2023-11.pdf" className="pdf-link">VIEW PDF</a>
            </div>
            <a href="/monthly-report" className="view-all-btn">VIEW ALL</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentSection;
