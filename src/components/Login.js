import React from 'react';
import { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login button click
  const handleLogin = () => {
    if (userName.trim()) {
      setIsLoggedIn(true);
    }
  };

  // Handle logout button click
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div>
      <div className={styles.loginContainer}>
        {isLoggedIn ? (
          <>
            <h1 className={styles.heading1}>Welcome {userName}!</h1>
            <button className={styles.primaryBtn} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={styles.input}
            />
            <button
              className={styles.primaryBtn}
              onClick={handleLogin}
              disabled={!userName.trim()}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;