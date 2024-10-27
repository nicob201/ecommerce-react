import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <Button className="cart-button">
      <ShoppingCartIcon sx={{ fontSize: 30, color: "var(--color4)" }} />
      <span>0</span>
    </Button>
  );
};
