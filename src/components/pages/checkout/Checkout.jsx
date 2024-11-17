import { doc, collection, updateDoc, addDoc } from "firebase/firestore";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";

const Checkout = () => {
  const { data } = useContext(CartContext);
  const { cart, getTotalQuantity, clearCart } = data;

  const [orderId, setOrderId] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  // Form
  const formHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const total = getTotalQuantity();
    const order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    try {
      // Crear una orden en la BD
      let createOrder = collection(db, "orders");
      const res = await addDoc(createOrder, order);
      setOrderId(res.id);

      // Actualizar la cantidad de unidades en la BD
      let updateProductUnits = collection(db, "products");
      for (let item of order.items) {
        const productId = item.id;
        const productRef = doc(updateProductUnits, productId);
        await updateDoc(productRef, { stock: item.stock - item.quantity });
      }

      clearCart(); // Limpiar el carrito despues de la orden
    } catch (error) {
      console.error("Error creating order:", error);
    } finally {
      setLoading(false);
    }
  };

  const infoFormUser = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    return (
      <Box
        sx={{
          maxWidth: 600,
          margin: "auto",
          mt: 12,
          height: "100%",
          minHeight: "100vh",
          p: 4,
        }}
      >
        <Typography variant="h5" align="center" sx={{ marginBottom: 4 }}>
          Thank you for your purchase! Your order number is: {orderId}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        mt: 12,
        height: "100%",
        minHeight: "100vh",
        p: 4,
      }}
    >
      <Typography variant="h5" align="center" sx={{ marginBottom: 4 }}>
        Complete this form to purchase order:
      </Typography>
      <form onSubmit={formHandler}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            placeholder="Leo Messi"
            variant="outlined"
            color="primary"
            fullWidth
            onChange={infoFormUser}
          />
          <TextField
            label="Phone Number"
            name="phone"
            placeholder="351123123"
            variant="outlined"
            color="primary"
            fullWidth
            onChange={infoFormUser}
          />
          <TextField
            label="Email"
            name="email"
            placeholder="example@gmail.com"
            variant="outlined"
            color="primary"
            fullWidth
            onChange={infoFormUser}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            {loading ? "Loading..." : "Send"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Checkout;
