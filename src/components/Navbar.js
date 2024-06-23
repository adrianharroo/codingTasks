import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <ul>
        <li>
          <Link to={'/home'} className={styles.navLink}>Home</Link>
        </li>
        <li>
          <Link to={'/about'} className={styles.navLink}>About</Link>
        </li>
        <li>
          <Link to={'/products'} className={styles.navLink}>Products</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;