import { Link } from "react-router-dom";
import "./cart.css";

const CartContainer = () => {
  return (
    <div className="cartContainer">
      <Link to="/">Back to store</Link>
      <h1>Aca va el carrito</h1>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
};

export default CartContainer;
