import './Navbar.css';

function Navbar({ logo, selectedStore, selectedSignUp }) {
  return (
    <div className="Navbar">
      <img alt="logo" src={logo}></img>
      <div className="Links">
        <a href="/">Home</a>
        <a className={selectedStore} href="/store">Store</a>
        <a className={selectedSignUp} href="/signup">Sign Up</a>
      </div>
    </div>
  );
}

export default Navbar;