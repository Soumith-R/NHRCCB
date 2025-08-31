import React from 'react';
import '../styles/NewsEvents.css';

const NewsEvents = () => {
  const photoGallery = [
    '/gallery1.jpg', '/gallery2.jpg', '/gallery3.jpg', 
    '/gallery4.jpg', '/gallery5.jpg', '/gallery6.jpg'
  ];

  const printMedia = [
    '/print1.jpg', '/print2.jpg', '/print3.jpg',
    '/print4.jpg', '/print5.jpg', '/print6.jpg'
  ];

  return (
    <section className="news-events">
      <div className="container">
        <h2>News and Events</h2>
        
        <div className="news-grid">
          <div className="news-section">
            <h3>PHOTO GALLERY</h3>
            <div className="gallery-grid">
              {photoGallery.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Gallery ${index + 1}`} />
                </div>
              ))}
            </div>
            <a href="/photos" className="view-all-btn">View All</a>
          </div>
          
          <div className="news-section">
            <h3>VIDEO GALLERY</h3>
            <div className="video-gallery">
              <div className="video-placeholder">
                <i className="fas fa-play-circle"></i>
                <p>Video content will be displayed here</p>
              </div>
            </div>
            <a href="/video-gallery" className="view-all-btn">View All</a>
          </div>
          
          <div className="news-section">
            <h3>PRINT MEDIA</h3>
            <div className="gallery-grid">
              {printMedia.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Print Media ${index + 1}`} />
                </div>
              ))}
            </div>
            <a href="/print-media" className="view-all-btn">View All</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
