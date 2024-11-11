import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const CartWidget = () => {
  const { data } = useContext(CartContext);
  const totalQuantity = data.getTotalQuantity();

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={totalQuantity} color="info" showZero>
        <ShoppingCartIcon sx={{ fontSize: 30, color: "var(--color4)" }} />
      </StyledBadge>
    </IconButton>
  );
};
