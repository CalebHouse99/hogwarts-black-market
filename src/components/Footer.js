import React from 'react';
import './Footer.css';

function Footer({ toggleDarkMode, isDarkMode }) {
  return (
    <div className="Footer">
      <button
        className={isDarkMode ? 'toggle-light' : 'toggle-dark'}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
      </button>
    </div>
  );
}

export default Footer;
