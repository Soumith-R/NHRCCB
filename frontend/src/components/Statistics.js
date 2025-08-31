import React from 'react';
import '../styles/Statistics.css';

const Statistics = () => {
  const stats = [
    {
      number: "25000+",
      label: "Volunteers",
      icon: "fas fa-users"
    },
    {
      number: "15000+",
      label: "Members",
      icon: "fas fa-user-friends"
    },
    {
      number: "5000+",
      label: "Officers",
      icon: "fas fa-user-tie"
    },
    {
      number: "100+",
      label: "HR Conventions/ Seminars",
      icon: "fas fa-calendar-alt"
    },
    {
      number: "500+",
      label: "Awareness Camps",
      icon: "fas fa-bullhorn"
    },
    {
      number: "5000+",
      label: "Cases Solved",
      icon: "fas fa-gavel"
    }
  ];

  return (
    <section className="statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-content">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
