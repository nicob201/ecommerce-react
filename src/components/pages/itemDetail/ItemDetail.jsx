import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import Counter from "../../common/counter/Counter";

const ItemDetail = ({ item, addToCart }) => {
  return item && item.id ? (
    <Box sx={{ minHeight: "100vh", maxWidth: 600, margin: "auto", mt: 12 }}>
      <CardMedia
        component="img"
        image={item.imageUrl}
        alt={item.title}
        sx={{ height: 300, objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h6" sx={{ marginY: 1 }}>
          Price: ${item.price}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          Stock: {item.stock}
        </Typography>
        <Counter stock={item.stock} addToCart={addToCart} />
      </CardContent>
    </Box>
  ) : (
    <Typography variant="h5" align="center" sx={{ marginTop: 4 }}>
      Producto no encontrado
    </Typography>
  );
};

export default ItemDetail;
