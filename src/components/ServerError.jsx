import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/ServerError.css';

const ServerError = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card error-card">
        <img
          src="../src/assets/google-logo.svg"
          alt="Google Logo"
          className="logo"
        />

        <div className="error-code">500</div>

        <h2>Something went wrong</h2>

        <h3>
          The server encountered an unexpected error. Please try again later.
        </h3>

        <p>
          We couldn't complete your request right now. Refresh the page or
          return to the sign-in screen.
        </p>

        <div className="card-bottom">
          <button
            className="secondary-btn"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>

          <button className="primary-btn" onClick={() => navigate('/')}>
            Sign in
          </button>
        </div>
      </div>

      <div className="footer">
        <select>
          <option>English (United States)</option>
          <option>Portuguese (Brazil)</option>
          <option>Spanish (Spain)</option>
        </select>

        <div className="footer-span">
          <span>Help</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
