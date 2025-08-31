import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>About NHRCCB</h1>
        </div>
        
        <div className="about-content">
          <section className="about-intro">
            <h2>National Human Rights and Crime Control Bureau</h2>
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
          </section>
          
          <section className="mission-vision">
            <div className="mission-vision-grid">
              <div className="mission">
                <h3>Our Mission</h3>
                <p>
                  To protect and promote human rights across the nation while ensuring 
                  crime prevention and justice for all. We strive to create a society 
                  based on equality, justice, and respect for human dignity.
                </p>
              </div>
              <div className="vision">
                <h3>Our Vision</h3>
                <p>
                  To build a world where every individual's fundamental rights are 
                  respected, protected, and promoted, creating a peaceful and just 
                  society for all.
                </p>
              </div>
            </div>
          </section>
          
          <section className="our-work">
            <h2>Our Work Areas</h2>
            <div className="work-areas">
              <div className="work-area">
                <i className="fas fa-balance-scale"></i>
                <h4>Human Rights Protection</h4>
                <p>Protecting fundamental human rights and ensuring justice for all.</p>
              </div>
              <div className="work-area">
                <i className="fas fa-shield-alt"></i>
                <h4>Crime Prevention</h4>
                <p>Working towards crime prevention and maintaining law and order.</p>
              </div>
              <div className="work-area">
                <i className="fas fa-graduation-cap"></i>
                <h4>Education & Awareness</h4>
                <p>Spreading awareness about human rights through education and training.</p>
              </div>
              <div className="work-area">
                <i className="fas fa-hands-helping"></i>
                <h4>Social Welfare</h4>
                <p>Conducting social welfare activities for the betterment of society.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
