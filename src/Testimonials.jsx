import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'This portfolio is amazing! Highly recommend for anyone looking for a modern design.',
      role: 'Software Engineer',
    },
    {
      name: 'Jane Smith',
      feedback: 'Incredible work and a fantastic user interface. The attention to detail is top-notch!',
      role: 'UI/UX Designer',
    },
    {
      name: 'Sam Wilson',
      feedback: 'Great layout and easy to navigate. I really appreciate the clean design and responsive layout.',
      role: 'Product Manager',
    },
  ];

  return (
    <div className="testimonials">
      <h2>What People Are Saying</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-name">- {testimonial.name}, <span>{testimonial.role}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
