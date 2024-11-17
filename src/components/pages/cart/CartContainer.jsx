import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
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

const CartContainer = () => {
  const { data } = useContext(CartContext);
  const { cart, clearCart, getTotalPrice } = data;

  return (
    <Box sx={{ p: 4, mt: 10, height: "100%", minHeight: "100vh" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Cart detail:
      </Typography>

      {cart.length > 0 ? (
        <Box>
          <List sx={{ paddingLeft: "20%" }}>
            {cart.map((item) => (
              <ListItem key={item.id} sx={{ py: 2 }}>
                <CardMedia
                  component="img"
                  alt={item.title}
                  image={item.imageUrl}
                  style={{ height: "100px", width: "100px", margin: "0 30px" }}
                />
                <ListItemText
                  primary={item.title}
                  secondary={`Units: ${item.quantity} - Subtotal: $${
                    item.price * item.quantity
                  }`}
                />
                <DeleteIcon
                  onClick={() => data.removeItem(item.id)}
                  style={{ margin: "0 200px", cursor: "pointer" }}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" align="center">
            Total: ${getTotalPrice()}
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}
          >
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

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button variant="contained" color="primary" component={Link} to="/">
          Back to store
        </Button>
      </Box>
    </Box>
  );
};

export default CartContainer;
