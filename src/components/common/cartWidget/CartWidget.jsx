import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cartWidget.css";

export const CartWidget = () => {
  const { data } = useContext(CartContext);
  const totalQuantity = data.getTotalQuantity();

  return (
    <div className="cart-widget">
      <ShoppingCartIcon className="cart-icon" />
      {totalQuantity > 0 && (
        <span className="cart-badge">{totalQuantity}</span>
      )}
    </div>
  );
};