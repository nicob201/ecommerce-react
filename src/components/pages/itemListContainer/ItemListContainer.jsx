import { Box, Typography } from "@mui/material";

export const ItemListContainer = ({ greeting }) => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4">{greeting}</Typography>
    </Box>
  );
};
