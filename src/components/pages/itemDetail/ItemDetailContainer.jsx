/* import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { products } from "../../../products";
import ItemDetail from "./itemDetail";
import { CartContext } from "../../../context/cartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { data } = useContext(CartContext);

  useEffect(() => {
    const productSelected = products.find((producto) => producto.id === id);
    setItem(productSelected);
  }, [id]);

  const addToCart = (count) => {
    data.addToCart(item, count);
  };

  return item ? (
    <ItemDetail item={item} addToCart={addToCart} />
  ) : (
    <Typography variant="h5" align="center" sx={{ marginTop: 4 }}>
      Product not found!
    </Typography>
  );
};

export default ItemDetailContainer;
 */

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ItemDetail from "./itemDetail";
import { CartContext } from "../../../context/cartContext";
import { ProductContext } from "../../../context/ProductContext";
import { toast } from "sonner";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { data } = useContext(CartContext);
  const { products, loading } = useContext(ProductContext);

  useEffect(() => {
    if (!loading) {
      const productSelected = products.find((producto) => producto.id === id);
      setItem(productSelected || {});
    }
  }, [id, products, loading]);

  const addToCart = (count) => {
    data.addToCart(item, count);
    toast.success("Product added to cart!", {
      position: "bottom-right",
    });
  };

  if (loading) {
    return (
      <Typography variant="h5" align="center" sx={{ marginTop: 4 }}>
        Loading product details...
      </Typography>
    );
  }

  return item && item.id ? (
    <ItemDetail item={item} addToCart={addToCart} />
  ) : (
    <Typography variant="h5" align="center" sx={{ marginTop: 4 }}>
      Product not found!
    </Typography>
  );
};

export default ItemDetailContainer;