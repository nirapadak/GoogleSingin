import React from 'react';
import '../assets/css/Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-card">
        <img
          src="../src/assets/google-logo.svg"
          alt="Google Logo"
          className="logo"
        />

        <div className="spinner"></div>

        <h2>Verifying your information</h2>
        <h3>Please wait a moment...</h3>

        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
