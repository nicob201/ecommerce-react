import { useState } from "react";

const Counter = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const sum = () => {
    stock > count ? setCount(count + 1) : null;
  };

  const res = () => {
    count > 1 ? setCount(count - 1) : null;
  };

  return (
    <div className="counter-container">
      <button
        className="counter-button"
        onClick={res}
        disabled={stock === 0 || count <= 1}
      >
        -
      </button>
      <span className="counter-value">{count}</span>
      <button
        className="counter-button"
        onClick={sum}
        disabled={stock === 0 || count >= stock}
      >
        +
      </button>
      <button
        className="add-to-cart-button"
        onClick={() => addToCart(count)}
        disabled={stock === 0}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Counter;