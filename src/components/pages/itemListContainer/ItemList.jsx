import { Box, Typography } from "@mui/material";
import ProductCards from "../../common/cardProduct/Card";

const ItemList = ({ greeting, items }) => {
  return (
    <Box className="item-list-container">
      <Typography variant="h4" className="item-list-greeting">{greeting}</Typography>
      <ProductCards products={items} />
    </Box>
  );
};

export default ItemList;