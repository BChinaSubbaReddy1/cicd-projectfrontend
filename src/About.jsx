import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="profile-section">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <h2 className="name-title">Hi, I'm  Peter</h2>
        <p className="profession">Aspiring Cybersecurity Engineer</p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h3>Who am I?</h3>
          <p>
            I'm a passionate Computer Science Engineering student with a strong interest in cybersecurity,
            full-stack development, and software engineering. I thrive on learning new technologies and building meaningful digital experiences.
          </p>
        </div>

        <div className="about-card">
          <h3>Education</h3>
          <ul>
            <li><strong>B.Tech CSE</strong> - KLU Vaddeswaram (CGPA: 8.96)</li>
            <li><strong>12th Grade</strong> - Sri Chaitanya Junior College (8.96%)</li>
            <li><strong>10th Grade</strong> - Oxford IIT & Medical Foundation (600/600)</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Interests</h3>
          <p>
            I enjoy exploring cybersecurity tools, participating in hackathons, and collaborating on software projects. I'm also keen on expanding my skills in backend systems and infrastructure security.
          </p>
        </div>
      </div>
    </div>
  );
}
