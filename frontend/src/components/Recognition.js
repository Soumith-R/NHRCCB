import React from 'react';
import '../styles/Recognition.css';

const Recognition = () => {
  const recognitions = [
    '/recognition1.jpg',
    '/recognition2.jpg', 
    '/recognition3.jpg',
    '/recognition4.jpg',
    '/recognition5.jpg',
    '/recognition6.jpg'
  ];

  return (
    <section className="recognition">
      <div className="container">
        <h2>OUR RECOGNITION AND AFFILIATION</h2>
        <div className="recognition-grid">
          {recognitions.map((logo, index) => (
            <div key={index} className="recognition-item">
              <img src={logo} alt={`Recognition ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
