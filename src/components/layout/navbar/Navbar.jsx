import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Typography } from "@mui/material";
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
      <Typography variant="h5" className="navbar">
        <Link to="/">Home</Link>
        <Link to="/category/notebooks">Notebooks</Link>
        <Link to="/category/phones">Phones</Link>
        <Link to="/category/tv">TVs</Link>
        <Link to="/category/keyboards">Keyboards</Link>
      </Typography>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};

export default Navbar;
