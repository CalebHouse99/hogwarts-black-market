import './HeroImg.css'
import HeroOverlay from './HeroOverlay'

function HeroImg(props) {
  return (
    <div className="HeroWrap">
      <img className="Logo" src={props.Logo} alt="Logo"></img>
      <img className="Hero" src={props.HeroImg} alt="Hero"></img>
      <HeroOverlay />
    </div>
  );
}

export default HeroImg;