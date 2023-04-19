import './HeroImg.css';
import HeroOverlay from './HeroOverlay';

function HeroImg(props) {
  const { darkMode, Logo, HeroImg } = props;

  return (
    <div className={`HeroWrap ${darkMode ? 'dark-mode' : ''}`}>
      <img className="Logo" src={Logo} alt="Logo" />
      <img className="Hero" src={HeroImg} alt="Hero" />
      <HeroOverlay darkMode={darkMode} />
    </div>
  );
}

export default HeroImg;

