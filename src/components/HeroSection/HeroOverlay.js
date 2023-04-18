import './HeroOverlay.css'

function HeroOverlay(props) {
  return (
    <div className="Overlay">
      <div className="Main">
        <h1>Explore Our Marketplace</h1>
        <button>Shop Now</button>
      </div>
      <div className="Secondary">
        <h2>Not A Member? Sign Up Now!</h2>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default HeroOverlay;