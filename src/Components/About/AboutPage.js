import React from 'react';
import './AboutPage.css';
import Safety from '../../assests/Images/Safety.jpg';
import Performance from '../../assests/Images/Performance.jpg';
import Comfort from '../../assests/Images/Comfort.png';

const values = [
  {
    title: 'Safety First',
    description: 'At FlyVista, passenger safety is our top priority. We follow the highest standards and regulations in aviation to ensure your journey is secure and worry-free.',
    image: Safety ,
  },
  {
    title: 'On-Time Performance',
    description: 'We value your time. Our dedicated team ensures flights are on schedule so you can reach your destination on time.',
    image:Performance,
  },
  {
    title: 'Comfort & Service',
    description: 'Experience luxury and comfort in the skies. Enjoy top-class amenities and world-class service aboard every FlyVista flight.',
    image: Comfort,
  },
];

const AboutPage = () => {
  return (

    
    <div className="about-container">
      <h1 className="about-title">About FlyVista</h1>
      <p className="about-subtitle">✈ Your journey begins with comfort, reliability, and style.</p>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          FlyVista is a forward-thinking airline committed to providing exceptional air travel experiences. We combine modern
          technology, comfort, and personalized service to make every journey memorable. Whether you're traveling for business or
          leisure, FlyVista is your trusted partner in the skies.
        </p>
      </div>

      <div className="about-section">
        <h2 className="values-heading">Our Core Values</h2>
        <div className="values-grid">
          {values.map((item, index) => (
            <div className="value-card" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="value-card-content">
                <div className="value-card-title">{item.title}</div>
                <div className="value-card-description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="quote">🌍 Fly smarter. Fly better. Fly with FlyVista.</p>
    </div>
  );
};

export default AboutPage;
