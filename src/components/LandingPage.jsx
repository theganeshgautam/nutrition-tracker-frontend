// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Nutrition Tracker</h1>
      <div>
        <Link to="/register">
          <button style={{ margin: '10px', padding: '10px' }}>Register</button>
        </Link>
        <Link to="/login">
          <button style={{ margin: '10px', padding: '10px' }}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
