import React from 'react';
import styles from './ProductPageLayout.module.css';
import ProductCard from '../components/ProductCard';
import TotalPrice from '../components/TotalPrice';

// Define the Products component, which receives totalPrice, handleAddToCart, and 
// isVisible as props
const Products = ({ totalPrice, handleAddToCart, isVisible }) => {

  // Array of product details
  const ShoesArray = [
    {
      image: './ProductImages/img1.jpg',
      title: 'Running Shoes',
      description: 'Lightweight and breathable shoes for your daily runs.',
      price: 89.99
    },
    {
      image: './ProductImages/img2.jpg',
      title: 'Hiking Boots',
      description: 'Rugged and durable boots for outdoor adventures.',
      price: 129.99
    },
    {
      image: './ProductImages/img3.jpg',
      title: 'Dress Loafers',
      description: 'Elegant and stylish loafers for formal occasions.',
      price: 79.99
    },
    {
      image: './ProductImages/img4.jpg',
      title: 'Sandals',
      description: 'Comfortable and breathable sandals for summer days.',
      price: 49.99
    },
    {
      image: './ProductImages/img5.jpg',
      title: 'Basketball Shoes',
      description: 'High-performance shoes designed for the basketball court.',
      price: 119.99
    },
    {
      image: './ProductImages/img6.jpg',
      title: 'Casual Sneakers',
      description: 'Versatile and trendy sneakers for everyday wear.',
      price: 69.99
    },
    {
      image: './ProductImages/img7.jpg',
      title: 'Rain Boots',
      description: 'Waterproof boots to keep your feet dry in wet weather.',
      price: 59.99
    },
    {
      image: './ProductImages/img8.jpg',
      title: 'Cowboy Boots',
      description: 'Classic cowboy boots with a rugged and stylish design.',
      price: 99.99
    },
    {
      image: './ProductImages/img9.jpg',
      title: 'Slippers',
      description: 'Cozy and comfortable slippers for relaxing at home.',
      price: 29.99
    },
    {
      image: './ProductImages/img10.jpg',
      title: 'Winter Boots',
      description: 'Insulated and warm boots for harsh winter conditions.',
      price: 109.99
    }
  ];

  return (
    <div className={styles.PageContainer}>
      {isVisible && <TotalPrice totalPrice={totalPrice} />}
      <h1>Shoes</h1>
      <div className={styles.PageLayout}>
        {ShoesArray.map((shoe, index) => (
          <ProductCard
            key={index}
            img={shoe.image}
            title={shoe.title}
            description={shoe.description}
            price={shoe.price}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;