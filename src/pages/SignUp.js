import './SignUp.css';
import React from 'react';
import Navbar from '../components/Navbar';
import lightLogo from '../img/HBM_Logo_v2_Black.png';

function SignUp() {
  return (
    <div>
      <Navbar logo={lightLogo}/>
      <h1>Sign Up Today!</h1>
    </div>
  );
}

export default SignUp;
