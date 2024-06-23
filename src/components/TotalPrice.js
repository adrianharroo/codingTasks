import React from 'react';
import styles from './TotalPrice.module.css';

// TotalPrice component used to render the total price calculated by the
// handleAddToCart function 
const TotalPrice = ({ totalPrice }) => {
  return (
    <div className={styles.totalPrice}>
      <h2>Total price: £{Number(totalPrice).toFixed(2)}</h2>
    </div>
  );
};

export default TotalPrice;
