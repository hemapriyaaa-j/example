import React, { useState } from 'react';
import './SignupPage.css'; 
 
const SignupPage = ({ onSignupSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
 
  const handleSignup = () => {
    if (!username || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    onSignupSuccess();
  };
 
  return (
    <div className="signup-form">
      <h2>Signup Form</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>{!username && error && <span>Please enter username.</span>}</div>
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>{!email && error && <span>Please enter email.</span>}</div>
        <div>{email && error && !validateEmail(email) && <span>Please enter a valid email.</span>}</div>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>{!password && error && <span>Please enter password.</span>}</div>
      </div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};
 
export default SignupPage;