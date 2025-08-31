import React from 'react';
import '../styles/LatestUpdates.css';

const LatestUpdates = () => {
  const updates = [
    {
      id: 1,
      date: "2025-10-05",
      title: "NHRCCB OFFICE ORDER NHRCCB/003/2025 REGARDING VOLUNTEER APPOINTMENT",
      link: "#"
    },
    {
      id: 2,
      date: "2025-10-04",
      title: "NHRCCB OFFICE ORDER NHRCCB/004/2025 REGARDING ACTIVE MEMBER APPOINTMENT",
      link: "#"
    },
    {
      id: 3,
      date: "2025-10-04",
      title: "NHRCCB OFFICE ORDER NHRCCB/005/2025 REGARDING OFFICER APPOINTMENT",
      link: "#"
    },
    {
      id: 4,
      date: "2025-06-26",
      title: "Shri Abhinav Saxena appointed as Officiate State President ,MP with immediate effect.",
      link: "#"
    },
    {
      id: 5,
      date: "2025-06-26",
      title: "प्रेम नारायण आर्य मानवाधिकार सम्मान",
      link: "#"
    },
    {
      id: 6,
      date: "2024-03-07",
      title: "NHRCCB OFFICE ORDER REGARDING WING MERGE",
      link: "#"
    }
  ];

  return (
    <section className="latest-updates">
      <div className="container">
        <div className="updates-header">
          <h2>LATEST UPDATE</h2>
          <div className="updates-ticker">
            <div className="ticker-content">
              {updates.map(update => (
                <div key={update.id} className="update-item">
                  <span className="update-date">{update.date}</span>
                  <a href={update.link} className="update-title">{update.title}</a>
                </div>
              ))}
            </div>
          </div>
          <a href="/official-notification" className="read-more-btn">Read more</a>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
