import React from 'react';
import HeroImg from './components/HeroSection/HeroImg';
import Dotd from './components/Dotd';
import Membership from './components/Membership';
import Explore from './components/Explore';
import Footer from './components/Footer';
import lightLogo from './img/Hogwarts_Marketplace_Black.png';
import darkLogo from './img/Hogwarts_Marketplace_White.png';
import lightHero from './img/lightHero.png';
import darkHero from './img/darkHero.png';

function HomePage({ isDarkMode, toggleDarkMode }) {
  return (
    <div>
      <HeroImg
        darkMode={isDarkMode}
        Logo={isDarkMode ? darkLogo : lightLogo}
        HeroImg={isDarkMode ? darkHero : lightHero}
      />
      <Dotd isDarkMode={isDarkMode} />
      <Membership />
      <Explore isDarkMode={isDarkMode} />
      <Footer toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
}

export default HomePage;
