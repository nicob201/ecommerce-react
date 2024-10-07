import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  const stylesImage = {
    margin: "10px",
    width: "50px",
    height: "50px",
  };
  return (
    <div className="container-navbar">
      <img
        src="https://res.cloudinary.com/dl73hi4ir/image/upload/v1728238526/logo_zu4yrw.webp"
        alt="logo"
        style={stylesImage}
        href="#"
      />
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Notebooks</a>
        <a href="#">Smartphones</a>
        <a href="#">Contact</a>
      </div>
      <div className="auth-buttons">
        <button>Login</button>
        <button>Signup</button>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;
