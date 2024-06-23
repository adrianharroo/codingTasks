import React from 'react';
import Login from '../components/Login';

// Home page simply renders Login.js
const Home = () => {
  return(
    <div className='Home'>
        <Login/>
    </div>
  )
};

export default Home;