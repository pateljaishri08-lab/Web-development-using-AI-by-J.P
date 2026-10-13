import React from 'react';
import './PageStyles.css';

export const TeacherInfo = () => {
  const teacher = {
    name: "Dr. Sarah Mitchell",
    title: "Senior Professor of Software Engineering",
    department: "Computer Science & Engineering",
    bio: "Dr. Sarah Mitchell has over 15 years of experience in both academia and the software industry. Her research focuses on distributed systems, cloud architecture, and agile methodologies. She is a recipient of several teaching excellence awards and has published over 40 research papers in top-tier journals.",
    specializations: ["Cloud Computing", "Microservices", "System Design", "Agile Software Development"],
    email: "sarah.mitchell@university.edu",
    office: "Engineering Building, Room 402",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  };

  return (
    <div className="info-page">
      <div className="info-container">
        <header className="page-header">
          <h1>Teacher Information</h1>
          <p>Meet our distinguished faculty member</p>
        </header>
        
        <div className="info-card teacher-card">
          <div className="teacher-header">
            <img src={teacher.image} alt={teacher.name} className="teacher-image" />
            <div className="teacher-intro">
              <h2>{teacher.name}</h2>
              <h3>{teacher.title}</h3>
              <p className="department">{teacher.department}</p>
            </div>
          </div>
          
          <div className="info-section">
            <h4>Biography</h4>
            <p>{teacher.bio}</p>
          </div>
          
          <div className="info-section">
            <h4>Specializations</h4>
            <div className="tag-container">
              {teacher.specializations.map((spec, index) => (
                <span key={index} className="tag">{spec}</span>
              ))}
            </div>
          </div>
          
          <div className="info-section contact-section">
            <h4>Contact Details</h4>
            <div className="contact-grid">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">{teacher.email}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Office:</span>
                <span className="contact-value">{teacher.office}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
