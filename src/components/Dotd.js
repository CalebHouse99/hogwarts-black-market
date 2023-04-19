import './Dotd.css'

function Dotd({ isDarkMode }) {
  let itemName = "This Will Be Imported Later - From like a database and stuff!"
  let itemPrice = 35.44 // This will be imported later, too!
  let itemDesc = "This is going to be an imported item description. Let me tell you more about that. Lorem ipsum dolor sike!!!! Gotem. This is still me typing. I would never just use all filler, I mean come on. Anywho, what are you up to today? Do you like ducks? If you answered something other than yes, then perhaps it would be wise of you to leave this website and never come back. Ever. Seriously. Haha jk. I'm jk about being jk. Leave now if you dare have that opinion. Ducks>Geese 'til the day I die."

  return (
    <div className={`Dotd ${isDarkMode ? 'dark-mode' : ''}`}>
      <img alt="Product thumbnail for the deal of the day"></img>
      <div className="deets">
        <h2>{itemName}</h2>
        <h3>${itemPrice}</h3>
        <p>{itemDesc}</p>
      </div>
    </div>
  );
}

export default Dotd;