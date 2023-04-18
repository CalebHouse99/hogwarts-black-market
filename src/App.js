import React, { useState } from 'react';
import Footer from './components/Footer';
import HeroImg from './components/HeroSection/HeroImg';
import './App.css';
import lightLogo from './img/HBM_Logo_v2_Black.png';
import darkLogo from './img/HBM_Logo_v2_White.png';
import lightHero from './img/lightHero.png';
import darkHero from './img/darkHero.png';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <HeroImg
        darkMode={isDarkMode}
        Logo={isDarkMode ? darkLogo : lightLogo}
        HeroImg={isDarkMode ? darkHero : lightHero}
      />
      <Footer toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
