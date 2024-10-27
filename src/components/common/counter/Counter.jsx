import { Box, Button } from "@mui/material";
import { useState } from "react";

const Counter = ({ stock, addToCart }) => {
  const [count, setCount] = useState(0);

  const sum = () => {
    stock > count ? setCount(count + 1) : null;
  };

  const res = () => {
    count > 0 ? setCount(count - 1) : null;
  };

  return (
    <Box>
      <Button variant="outlined" size="small" onClick={res}>
        -
      </Button>
      <Button>{count}</Button>
      {/* <span>{count}</span> */}
      <Button variant="outlined" size="small" onClick={sum}>
        +
      </Button>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          size="medium"
          onClick={() => addToCart(count)}
        >
          Add To Cart
        </Button>
        <button></button>
      </Box>
    </Box>
  );
};

export default Counter;
