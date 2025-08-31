import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "HARYANA STATE CONVENTION ON HUMAN RIGHTS 2024",
      subtitle: "AT DR. MANGAL SEN GOVT. AUDITORIUM, KARNAL, HARYANA",
      image: "/hero-slide1.jpg"
    },
    {
      id: 2,
      title: "National Human Rights and Crime Control Bureau",
      subtitle: "Working for Human Rights Protection and Crime Prevention",
      image: "/hero-slide2.jpg"
    },
    {
      id: 3,
      title: "Join Our Mission",
      subtitle: "Be Part of the Change for a Better Society",
      image: "/hero-slide3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <div className="container">
                <div className="hero-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <div className="hero-buttons">
                    <button className="btn btn-primary">Learn More</button>
                    <button className="btn btn-secondary">Join Us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
