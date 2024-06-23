import React from 'react';
import Figure from 'react-bootstrap/Figure';
import TotalPrice from '../components/TotalPrice';
import styles from './About.module.css';

// Using bootstrap for the layout of the About page
const About = ({ totalPrice, isVisible }) => {
  return (
    <div className={styles.About}>
      {isVisible && <TotalPrice totalPrice={totalPrice} />}
      <Figure className={styles.Logo}>
        <Figure.Image
          width={125}
          alt="Store logo"
          src="/logo.png"
        />
        <Figure.Caption>
          <h2>About Our Store</h2>
          <p>We offer a wide variety of shoes for all occasions. Our mission is to provide quality footwear for everyone.</p>
        </Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image
          width={1000}
          alt="Store interior"
          src="/shopImg1.jpg"
        />
        <Figure.Caption>Our beautiful store front.</Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image
          width={1000}
          alt="Store interior"
          src="/shopImg2.jpeg"
        />
        <Figure.Caption>Experience Luxury.</Figure.Caption>
      </Figure>
      <h2>Contact Us</h2>
      <p>Email: contact@shoestore.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
  );
};

export default About;