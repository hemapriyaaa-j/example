import React, { useState } from 'react';
import './LoginPage.css'; 
 
const LoginPage = ({ onLoginSuccess, onGoToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
 
  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    onLoginSuccess();
  };
 
  return (
    <div className="login-form">
      <h2>Login Form</h2>
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
      <button onClick={handleLogin}>Login</button>
      <div>
        <p>Not a member? <button onClick={onGoToSignup}>Signup now</button></p>
      </div>
    </div>
  );
};
 
export default LoginPage;