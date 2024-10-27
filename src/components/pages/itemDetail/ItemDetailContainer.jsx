import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { products } from "../../../products";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const productSelected = products.find((producto) => producto.id === id);
    setItem(productSelected);
  }, [id]);

  const addToCart = (count) => {
    const objeto = { ...item, quantity: count };
    console.log(objeto);
  };

  return item ? (
    <ItemDetail item={item} addToCart={addToCart} />
  ) : (
    <Typography variant="h5" align="center" sx={{ marginTop: 4 }}>
      Producto no encontrado
    </Typography>
  );
};

export default ItemDetailContainer;
