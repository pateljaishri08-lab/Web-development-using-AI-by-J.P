import React from 'react';
import './PageStyles.css';

export const CourseInfo = () => {
  const course = {
    program: "Software Engineering",
    title: "Advanced Software Architecture",
    code: "SE-401",
    description: "This course explores the principles and patterns of modern software architecture. Students will learn how to design scalable, maintainable, and robust systems using state-of-the-art technologies and methodologies.",
    syllabus: [
      { week: 1, topic: "Introduction to Software Architecture & Patterns" },
      { week: 2, topic: "Microservices vs. Monolithic Architecture" },
      { week: 3, topic: "Cloud-Native Design & Kubernetes" },
      { week: 4, topic: "Event-Driven Systems & Messaging" },
      { week: 5, topic: "Data Consistency in Distributed Systems" },
      { week: 6, topic: "Security-First Architecture" }
    ],
    prerequisites: ["Data Structures", "Object-Oriented Programming", "System Design Basics"],
    duration: "12 Weeks",
    credits: 4
  };

  return (
    <div className="info-page">
      <div className="info-container">
        <header className="page-header">
          <h1>Course Information</h1>
          <p>Explore the details of our {course.program} program</p>
        </header>

        <div className="info-card course-card">
          <div className="course-hero">
            <div className="course-badge">{course.code}</div>
            <h2>{course.title}</h2>
            <div className="course-meta">
              <span><strong>Program:</strong> {course.program}</span>
              <span><strong>Duration:</strong> {course.duration}</span>
              <span><strong>Credits:</strong> {course.credits} Units</span>
            </div>
          </div>

          <div className="info-section">
            <h4>Course Description</h4>
            <p>{course.description}</p>
          </div>

          <div className="info-section">
            <h4>Prerequisites</h4>
            <div className="tag-container">
              {course.prerequisites.map((req, index) => (
                <span key={index} className="tag secondary">{req}</span>
              ))}
            </div>
          </div>

          <div className="info-section">
            <h4>Weekly Syllabus</h4>
            <div className="syllabus-list">
              {course.syllabus.map((item, index) => (
                <div key={index} className="syllabus-item">
                  <span className="week-label">Week {item.week}</span>
                  <span className="topic-text">{item.topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
