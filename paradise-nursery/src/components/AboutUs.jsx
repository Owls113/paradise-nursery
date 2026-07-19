import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Paradise Nursery</h1>
        <p className="about-intro">
          Welcome to <strong>Paradise Nursery</strong>, your trusted destination for beautiful,
          healthy houseplants. Founded with a passion for greenery and sustainable living,
          we bring nature closer to your home.
        </p>

        <div className="about-sections">
          <div className="about-section">
            <h2>🌱 Our Mission</h2>
            <p>
              We believe every home deserves a touch of green. Our mission is to make plant 
              ownership accessible, enjoyable, and rewarding for everyone — from beginners to 
              seasoned plant parents.
            </p>
          </div>

          <div className="about-section">
            <h2>🌿 What We Offer</h2>
            <p>
              We curate a diverse collection of indoor plants, outdoor plants, and succulents. 
              Each plant is hand-selected, nurtured with care, and delivered to your doorstep 
              in perfect condition.
            </p>
          </div>

          <div className="about-section">
            <h2>💚 Why Choose Us</h2>
            <ul>
              <li>Premium quality plants sourced from trusted growers</li>
              <li>Detailed care guides with every purchase</li>
              <li>30-day plant health guarantee</li>
              <li>Eco-friendly packaging</li>
              <li>Expert customer support</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>📍 Our Story</h2>
            <p>
              Paradise Nursery started as a small family-owned greenhouse in 2015. Over the years, 
              we have grown into a beloved brand serving thousands of happy customers. Our team 
              of horticulturists and plant enthusiasts is dedicated to helping you create your 
              own indoor paradise.
            </p>
          </div>
        </div>

        <div className="about-contact">
          <h2>📞 Contact Us</h2>
          <p>Email: hello@paradisenursery.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Green Leaf Avenue, Garden City, CA 90210</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
