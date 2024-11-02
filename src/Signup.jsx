/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const userData = { email, password };
    localStorage.setItem('user', JSON.stringify(userData));

    alert('Signup successful! Please login now.');
    navigate('/login');
  };

  return (
    <div className="signup">
      <div className="forloginheading">
        <h1>Signup</h1>
      </div>
      <div className="foremailandpassword">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="donthaveaccountandandsignupdiv">
        <p className="firsp">Already have an account?</p>
        <span className="span" onClick={() => navigate('/login')}>
          Login
        </span>
      </div>
      <div className="buttondiv">
        <button className="buttonone" onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
