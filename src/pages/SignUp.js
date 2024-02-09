import './SignUp.css';
import React from 'react';
import Navbar from '../components/Navbar';
import lightLogo from '../img/Hogwarts_Marketplace_Black.png';

function SignUp() {
  return (
    <div>
      <Navbar selectedSignUp="selected" logo={lightLogo} />
      <h1>Sign Up Today!</h1>
    </div>
  );
}

export default SignUp;
