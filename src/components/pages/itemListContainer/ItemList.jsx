import { Box, Typography } from "@mui/material";
import ProductCards from "../../common/cardProduct/Card";

const ItemList = ({ greeting, items }) => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "var(--color2)",
        textAlign: "center",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4">{greeting}</Typography>
      <ProductCards products={items} />
    </Box>
  );
};

export default ItemList;
