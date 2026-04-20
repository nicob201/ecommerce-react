import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.css";

const CartContainer = () => {
  const { data } = useContext(CartContext);
  const { cart, clearCart, getTotalPrice } = data;

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      {cart.length > 0 ? (
        <div>
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-info">
                    Units: {item.quantity} — Subtotal: ${item.price * item.quantity}
                  </p>
                </div>
                <DeleteIcon
                  onClick={() => data.removeItem(item.id)}
                  className="cart-item-delete"
                />
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p className="cart-total">Total: ${getTotalPrice()}</p>
            <div className="cart-buttons">
              <button className="cart-button cart-button-secondary" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/checkout">
                <button className="cart-button cart-button-primary">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <p className="cart-empty-text">Your cart is empty</p>
          <Link to="/">
            <button className="cart-button cart-button-primary">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-back-button">
          <Link to="/">
            <button className="cart-button cart-button-secondary">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;