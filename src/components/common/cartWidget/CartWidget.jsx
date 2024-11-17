import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
  const { data } = useContext(CartContext);
  const totalQuantity = data.getTotalQuantity();

  return (
    <IconButton aria-label="cart">
      <Badge
        badgeContent={totalQuantity}
        color="info"
        showZero
        classes={{ badge: "badge" }}
      >
        <ShoppingCartIcon className="cart-icon" />
      </Badge>
    </IconButton>
  );
};
