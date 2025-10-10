import React from 'react';
import './Skills.css';

const skillsData = [
  {
    skill: 'Cybersecurity',
    description: 'Experienced in network security, penetration testing, and risk assessment.',
  },
  {
    skill: 'Data Science',
    description: 'Proficient in data analysis, machine learning algorithms, and predictive modeling.',
  },
  {
    skill: 'Cloud Computing',
    description: 'Familiar with cloud platforms such as AWS, Azure, and Google Cloud.',
  },
  {
    skill: 'Full-Stack Development',
    description: 'Skilled in both front-end and back-end development using JavaScript, React, Node.js, and databases.',
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.skill}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
