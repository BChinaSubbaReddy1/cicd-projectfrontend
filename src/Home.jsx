import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Your Dashboard</h2>
      <p>
        We're glad to have you here! This dashboard helps you stay on top of your career and
        application progress.
      </p>

      <section className="section">
        <h3>🔍 Job Search Made Easy</h3>
        <p>
          Use the <strong>Job Search</strong> feature to explore thousands of job opportunities
          tailored to your skills and interests. Filter jobs by location, company, or role to find
          your perfect match.
        </p>
      </section>

      <section className="section">
        <h3>📌 Manage Your Job Postings</h3>
        <p>
          If you're an employer, post and manage job listings with ease. Track applications,
          update job descriptions, and communicate with candidates—all in one place.
        </p>
      </section>

      <section className="section">
        <h3>👤 Your Personal Profile</h3>
        <p>
          Keep your profile updated with your latest skills, experience, and resume. A strong
          profile increases your chances of getting noticed by top recruiters.
        </p>
      </section>

      <section className="section">
        <h3>📈 Quick Stats</h3>
        <ul>
          <li>✅ Applications Submitted: <strong>5</strong></li>
          <li>📨 Interview Invites: <strong>2</strong></li>
          <li>📝 Profile Completion: <strong>80%</strong></li>
        </ul>
      </section>

      <section className="section">
        <h3>📰 Latest Updates</h3>
        <p>
          <em>“New feature alert: Now track application status in real-time from your dashboard!”</em><br />
          Stay tuned for more updates and improvements to enhance your job search journey.
        </p>
      </section>
    </div>
  );
};

export default Home;
