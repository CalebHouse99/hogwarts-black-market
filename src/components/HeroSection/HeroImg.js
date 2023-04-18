import './HeroImg.css'
import HeroOverlay from './HeroOverlay'

function HeroImg({ Logo, HeroImg, darkMode }) {
  return (
    <div className="HeroWrap">
      <img className="Logo" src={Logo} alt="Logo"></img>
      <img className="Hero" src={HeroImg} alt="Hero"></img>
      <HeroOverlay darkMode={darkMode} />
    </div>
  );
}

export default HeroImg;
