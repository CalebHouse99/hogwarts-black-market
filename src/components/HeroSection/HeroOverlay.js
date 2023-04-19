import './HeroOverlay.css'

function HeroOverlay({ darkMode }) {
  return (
    <div className={`Overlay ${darkMode ? 'dark-mode' : ''}`}>
      <div className="Main">
        <h1 className={darkMode ? 'dark-mode-text' : ''}>Explore Our Marketplace</h1>
        <a href="/store">
          <button className={darkMode ? 'dark-mode-button-main' : ''}>Shop Now</button>
        </a>
      </div>
      <div className="Secondary">
        <h2 className={darkMode ? 'dark-mode-text' : ''}>Not A Member? Sign Up Now!</h2>
        <a href="/signup">
          <button className={darkMode ? 'dark-mode-button-secondary' : ''}>Sign Up</button>
        </a>
      </div>
    </div>
  );
}


export default HeroOverlay;