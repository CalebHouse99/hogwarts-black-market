import React from 'react';
import './Footer.css';

function Footer({ toggleDarkMode }) {
  return (
    <div className="Footer">
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default Footer;
