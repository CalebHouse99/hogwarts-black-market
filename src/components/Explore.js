import './Explore.css'

function Explore({ isDarkMode }) {
  return (
    <div className={`Explore ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>Explore Our Marketplace</h1>
      <h1 className="Arrow">&#10230;</h1>
      <button>Shop Now</button>
    </div>
  );
}

export default Explore;