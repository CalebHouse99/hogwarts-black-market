import './Navbar.css';

function Navbar({logo}) {
  return (
    <div className="Navbar">
      <img alt="logo" src={logo}></img>
      <div className="Links">
        <a href="/">Home</a>
        <a href="/store">Store</a>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
}

export default Navbar;