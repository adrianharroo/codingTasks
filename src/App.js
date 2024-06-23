import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Products from './pages/Products.js';
import Navbar from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State to track the total price of products added to the cart
  const [totalPrice, setTotalPrice] = useState(0);

  // State to track the visibility of the TotalPrice component
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle adding a product to the cart
  const handleAddToCart = (price) => {
    setTotalPrice(prevTotalPrice => prevTotalPrice + price);
    setIsVisible(true); // Show the TotalPrice component when a product is added
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route 
          path='/about' 
          element={<About totalPrice={totalPrice} isVisible={isVisible} />} 
        />
        <Route 
          path='/products' 
          element={<Products totalPrice={totalPrice} handleAddToCart={handleAddToCart} isVisible={isVisible} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
