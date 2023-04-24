import './Tier.css'

function Tier({ title, tierPrice, isDarkMode }) {
  return (
    <div className={`Tier ${isDarkMode ? 'dark-mode' : ''}`}>
      <img alt="Tier thumbnail" src='https://i.imgur.com/3ZQZ7Zm.png'></img>
      <div className="TierContent">
        <h2>{title}</h2>
        <a href="/signup">
          <button>{tierPrice}</button>  
        </a>
      </div>
    </div>
  );
}

export default Tier;