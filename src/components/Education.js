// src/components/Education.js
import React, { useState } from 'react';
import Slider from 'react-slick';

const Education = () => {
  const [activeCategory, setActiveCategory] = useState('Prompt Engineering');
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = [
    'Prompt Engineering',
    'Wix',
    'Full Stack',
    'Programming',
    'Data Analytics',
    'Language'
  ];  

  const certifications = {
    'Prompt Engineering': [
      { title: 'ChatGPT Prompt Engineering for Developers', img: '/images/ChatGPT Prompt Engineering for Developers Certificate.jpg' }
    ],
    'Wix': [
      { title: 'Wix Velo Certification', img: '/images/Wix Velo Certification.png' },
      { title: 'Wix Accessibility Certification', img: '/images/Wix Accessibility Certification.png' }
    ],
    'Full Stack': [
      { title: 'Codo a Codo', img: '/images/Codo a Codo Certificate.jpg' },
      { title: 'Argentina Programa', img: '/images/Argentina Programa Certificate.jpg' }
    ],
    'Programming': [
      { title: 'Responsive Web Design', img: '/images/Freecodecamp Responsive Web Design Certificate.jpg' },
      { title: 'JavaScript Algorithms and Data Structures', img: '/images/Freecodecamp JavaScript Algorithms and Data Structures Certificate.jpg' }
    ],
    'Data Analytics': [
      { title: 'Google Data Analytics Professional Certificate', img: '/images/Google Data Analytics Professional Certificate.jpg' }
    ],
    'Language': [
      { title: 'First Certificate Exam in English', img: '/images/First Certificate Exam in English.jpg' }
    ]
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    cssEase: 'ease-in-out',
    beforeChange: () => setIsAnimating(true),
    afterChange: () => setIsAnimating(false),
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="education">
      <h1>Education</h1>
      <div className="category-menu">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${category === activeCategory ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Slider {...sliderSettings} className={`certifications-slider ${isAnimating ? 'slide-in' : ''}`}>
        {certifications[activeCategory].map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="tooltip">
              <span className="tooltip-text">{cert.title}</span>
              <img src={cert.img} alt={cert.title} />
            </div>
            <h3>{cert.title}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Education;

/* const Education = () => {
  return (
    <section className="education">
      <h1>Education</h1>
      <div className="education-section">
        <h2>LowCode</h2>
        <div className="certifications">
          <img src="/images/Wix Velo Certification.png" alt="LowCode Certification 1" />
          <img src="/images/Wix Accessibility Certification.png" alt="LowCode Certification 2" />
        </div>
      </div>

      <div className="education-section">
        <h2>Prompt Engineering</h2>
        <div className="certifications">
          <img src="/images/ChatGPT Prompt Engineering for Developers Certificate.jpg" alt="Prompt Engineering Certification" />
        </div>
      </div>

      <div className="education-section">
        <h2>Full Stack Web Development</h2>
        <div className="certifications">
          <img src="/images/Argentina Programa Certificate.jpg" alt="Full Stack Certification 1" />
          <img src="/images/Codo a Codo Certificate.jpg" alt="Full Stack Certification 2" />
        </div>
      </div>

      <div className="education-section">
        <h2>Web Development Foundations</h2>
        <div className="certifications">
          <img src="/images/Freecodecamp Responsive Web Design Certificate.jpg" alt="Web Development Foundations Certification 1" />
          <img src="/images/Freecodecamp JavaScript Algorithms and Data Structures Certificate.jpg" alt="Web Development Foundations Certification 2" />
        </div>
      </div>

      <div className="education-section">
        <h2>Data Analytics</h2>
        <div className="certifications">
          <img src="/images/Google Data Analytics Professional Certificate.jpg" alt="Data Analytics Certification" />
        </div>
      </div>

      <div className="education-section">
        <h2>Language</h2>
        <div className="certifications">
          <img src="/images/First Certificate Exam in English.jpg" alt="Language Certification" />
        </div>
      </div>
    </section>
  );
};

export default Education; */