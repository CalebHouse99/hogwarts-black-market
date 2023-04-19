import './Tier.css'

function Tier({ title, tierPrice, isDarkMode }) {
  return (
    <div className={`Tier ${isDarkMode ? 'dark-mode' : ''}`}>
      <img alt="Tier thumbnail"></img>
      <h2>{title}</h2>
      <button>{tierPrice}</button>
    </div>
  );
}

export default Tier;