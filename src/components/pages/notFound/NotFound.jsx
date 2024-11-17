import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <Box className="not-found-container">
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
        className="not-found-button"
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
