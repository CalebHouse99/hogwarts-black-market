import './Tier.css'

function Tier({ title, tierPrice, isDarkMode }) {
  return (
    <div className={`Tier ${isDarkMode ? 'dark-mode' : ''}`}>
      <img alt="Tier thumbnail"></img>
      <h2>{title}</h2>
      <a href="/signup">
        <button>{tierPrice}</button>  
      </a>
    </div>
  );
}

export default Tier;