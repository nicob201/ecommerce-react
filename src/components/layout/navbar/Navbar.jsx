import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dl73hi4ir/image/upload/v1728238526/logo_zu4yrw.webp"
          alt="logo"
          className="navbar-logo"
        />
      </Link>
      <nav className="navbar">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/category/notebooks" className="navbar-link">Notebooks</Link>
        <Link to="/category/phones" className="navbar-link">Phones</Link>
        <Link to="/category/tv" className="navbar-link">TVs</Link>
        <Link to="/category/keyboards" className="navbar-link">Keyboards</Link>
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};

export default Navbar;