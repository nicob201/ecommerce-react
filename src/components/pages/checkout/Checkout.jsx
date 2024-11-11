import { doc, collection, updateDoc, addDoc } from "firebase/firestore";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/cartContext";
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

  // Form
  const formHandler = (event) => {
    event.preventDefault();
    const total = getTotalQuantity();
    const order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    // Funcion para crear una orden en la BD
    let createOrder = collection(db, "orders");
    addDoc(createOrder, order).then((res) => setOrderId(res.id));
    clearCart();

    // Funcion para actualizar la cantidad de unidades en la BD
    let updateProductUnits = collection(db, "products");
    order.items.forEach((item) => {
      const productId = item.id;
      const productRef = doc(updateProductUnits, productId);
      updateDoc(productRef, { stock: item.stock - item.quantity });
    });
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Checkout;
