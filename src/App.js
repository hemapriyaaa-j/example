import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import './App.css'; 
 
const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [userData, setUserData] = useState({});
 
  const handleLoginSuccess = () => setCurrentPage('home');
  const handleSignupSuccess = () => setCurrentPage('login');
 
  return (
    <div>
      {currentPage === 'login' && (
        <LoginPage
          onLoginSuccess={handleLoginSuccess}
          onGoToSignup={() => setCurrentPage('signup')}
        />
      )}
      {currentPage === 'signup' && (
        <SignupPage onSignupSuccess={handleSignupSuccess} />
      )}
      {currentPage === 'home' && <HomePage userData={userData} />}
    </div>
  );
};
 
export default App;