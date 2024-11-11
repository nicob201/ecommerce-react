import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext";
import { useContext } from "react";
import { Box, Skeleton } from "@mui/material";

const ItemListContainer = () => {
  const { products } = useContext(ProductContext);
  const { name } = useParams();
  const filteredItems = name
    ? products.filter((product) => product.category === name)
    : products;

  // Return temprano para mostrar skeletons
  if (products.length === 0) {
    return (
      <Box sx={{ display: "flex", gap: 3, p: 4, mt: 10 }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Box key={index} sx={{ width: 200 }}>
            <Skeleton variant="rectangular" width={200} height={150} />
            <Skeleton variant="text" width="80%" sx={{ mt: 1 }} />
            <Skeleton variant="text" width="60%" />
          </Box>
        ))}
      </Box>
    );
  }

  return <ItemList items={filteredItems} />;
};

export default ItemListContainer;
