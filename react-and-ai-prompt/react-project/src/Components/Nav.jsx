import React from "react";
import "./Nav.css";

export const Nav = ({ currentPage, setPage }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}>ReactApp</a>
        </div>
        <div className="nav-links">s
          <button 
            onClick={() => setPage('home')} 
            className={`nav-link-btn ${currentPage === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setPage('teacher')} 
            className={`nav-link-btn ${currentPage === 'teacher' ? 'active' : ''}`}
          >
            Teacher
          </button>
          <button 
            onClick={() => setPage('course')} 
            className={`nav-link-btn ${currentPage === 'course' ? 'active' : ''}`}
          >
            Course
          </button>
          <button 
            onClick={() => setPage('about')} 
            className={`nav-link-btn ${currentPage === 'about' ? 'active' : ''}`}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  )
}
