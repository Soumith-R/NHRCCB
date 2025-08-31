import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About NHRCCB</h2>
            <p>
              National Human Rights and Crime Control Bureau (NHRCCB) is functioning with commitment to the Noble Cause of Human Rights Protection
              and Promotion, Justice, Education, Love, Peace, Harmony to all and Friendship,
              National & International Integration by Exchange of Ideas & Ethos around the Nation.
              NHRCCB is working for the Protection and Promotion of Human Rights and crime
              prevention across the nation.
            </p>
            <p>
              National Human Rights and Crime Control Bureau (NHRCCB) is a Non-Govt./Non-Profit Organization Incorporated under the Legislation of the
              Government of India. Registered in 2017 under Indian Trust Act- 1882 Government
              Of India with Regn. No 483/2017. Registered with NITI AAYOG, Government of
              India, United Nation Department Of Economics and Social Affairs, United Nation, 12A
              & 80G Under Department of Income Tax, Ministry of Finance Government of India
              and CSR1 Under Ministry Of Corporate Affairs, Government of India.
            </p>
          </div>
          <div className="about-iso">
            <img src="/iso-logo.png" alt="ISO Certification" className="iso-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
