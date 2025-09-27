import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-heading">My Resume</h2>
      <div className="resume-section">
        <h3>Personal Information</h3>
        <ul className="resume-info">
          <li><strong>Name:</strong> Peter Parkar</li>
          <li><strong>Email:</strong> PeterP@email.com</li>
          <li><strong>Phone:</strong> +91 123 456 7890</li>
          <li><strong>Location:</strong> Guntur, Andhra Pradesh</li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
        <ul className="resume-info">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML, CSS</li>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>Experience</h3>
        <div className="experience-item">
          <h4>Software Intern</h4>
          <p>Company: XYZ Pvt. Ltd.</p>
          <p>Duration: June 2024 - Present</p>
          <ul>
            <li>Developed features in React and Node.js</li>
            <li>Worked with SQL databases and optimized queries</li>
            <li>Collaborated with cross-functional teams on product development</li>
          </ul>
        </div>
        <div className="experience-item">
          <h4>Full Stack Developer Intern</h4>
          <p>Company: ABC Tech Solutions</p>
          <p>Duration: Dec 2023 - May 2024</p>
          <ul>
            <li>Designed and implemented RESTful APIs using Spring Boot</li>
            <li>Built responsive user interfaces with React</li>
            <li>Implemented features and bug fixes in Agile sprints</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        <div className="education-item">
          <h4>B.Tech in Computer Science Engineering</h4>
          <p>University: KLU Vaddeswaram</p>
          <p>Year of Graduation: 2026</p>
        </div>
      </div>

      <div className="resume-section">
        <h3>Contact</h3>
        <ul className="resume-info">
          <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="mailto:peterp@email.com">Email</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
