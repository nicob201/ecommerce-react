import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  CardMedia,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.css";

const CartContainer = () => {
  const { data } = useContext(CartContext);
  const { cart, clearCart, getTotalPrice } = data;

  return (
    <Box className="cart-container">
      <Typography variant="h4" className="cart-title" gutterBottom>
        Cart detail:
      </Typography>

      {cart.length > 0 ? (
        <Box>
          <List className="cart-list">
            {cart.map((item) => (
              <ListItem key={item.id} className="cart-item">
                <CardMedia
                  component="img"
                  alt={item.title}
                  image={item.imageUrl}
                  className="cart-item-img"
                />
                <ListItemText
                  primary={item.title}
                  secondary={`Units: ${item.quantity} - Subtotal: $${
                    item.price * item.quantity
                  }`}
                  className="cart-item-text"
                />
                <DeleteIcon
                  onClick={() => data.removeItem(item.id)}
                  className="cart-item-delete"
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" className="cart-total">
            Total: ${getTotalPrice()}
          </Typography>
          <Box className="cart-buttons">
            <Button variant="contained" color="primary" onClick={clearCart}>
              Clear cart
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/checkout"
            >
              Checkout
            </Button>
          </Box>
        </Box>
      ) : (
        <Typography variant="h6" align="center" color="textSecondary">
          No products in cart!
        </Typography>
      )}

      <Box className="cart-back-button">
        <Button variant="contained" color="primary" component={Link} to="/">
          Back to store
        </Button>
      </Box>
    </Box>
  );
};

export default CartContainer;
