import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 15,
        p: 10,
      }}
    >
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
