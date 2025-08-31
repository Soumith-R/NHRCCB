import React from 'react';
import Hero from '../components/Hero';
import LatestUpdates from '../components/LatestUpdates';
import AboutSection from '../components/AboutSection';
import PresidentSection from '../components/PresidentSection';
import Statistics from '../components/Statistics';
import NewsEvents from '../components/NewsEvents';
import Recognition from '../components/Recognition';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <LatestUpdates />
      <AboutSection />
      <PresidentSection />
      <Statistics />
      <NewsEvents />
      <Recognition />
    </div>
  );
};

export default Home;
