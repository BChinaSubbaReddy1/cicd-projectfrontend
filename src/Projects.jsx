import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Employee Management System</h3>
        <p className="project-description">
          A web application that allows managers to add, update, and remove employee records. Features include data validation, search functionality, and CRUD operations.
        </p>
        <p className="tech-stack"><strong>Technologies Used:</strong> React, Node.js, MongoDB, Express</p>
        <div className="links">
          <a href="https://github.com/yourusername/employee-management" target="_blank" rel="noopener noreferrer">View Source Code</a>
          <a href="https://your-live-project-link.com" target="_blank" rel="noopener noreferrer">View Live Demo</a>
        </div>
      </div>

      <div className="project-card">
        <h3>Quiz Builder</h3>
        <p className="project-description">
          An interactive quiz builder that allows users to create custom quizzes and share them with others. Includes features like timer, random question order, and results analysis.
        </p>
        <p className="tech-stack"><strong>Technologies Used:</strong> React, Vite, CSS</p>
        <div className="links">
          <a href="https://github.com/yourusername/quiz-builder" target="_blank" rel="noopener noreferrer">View Source Code</a>
          <a href="https://your-live-project-link.com" target="_blank" rel="noopener noreferrer">View Live Demo</a>
        </div>
      </div>

      <div className="project-card">
        <h3>Warehouse Management System</h3>
        <p className="project-description">
          A system for tracking inventory in a warehouse, providing features like adding/removing products, tracking stock levels, and generating reports for stock management.
        </p>
        <p className="tech-stack"><strong>Technologies Used:</strong> Spring Boot, MySQL, HTML, CSS</p>
        <div className="links">
          <a href="https://github.com/yourusername/warehouse-management" target="_blank" rel="noopener noreferrer">View Source Code</a>
          <a href="https://your-live-project-link.com" target="_blank" rel="noopener noreferrer">View Live Demo</a>
        </div>
      </div>

      <div className="project-card">
        <h3>Job Portal</h3>
        <p className="project-description">
          A platform for job seekers to find job opportunities and for employers to post job openings. Features include user authentication, job search, and profile management.
        </p>
        <p className="tech-stack"><strong>Technologies Used:</strong> React, Node.js, MongoDB, Express</p>
        <div className="links">
          <a href="https://github.com/yourusername/job-portal" target="_blank" rel="noopener noreferrer">View Source Code</a>
          <a href="https://your-live-project-link.com" target="_blank" rel="noopener noreferrer">View Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
