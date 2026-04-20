import { doc, collection, updateDoc, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";

const Checkout = () => {
  const { data } = useContext(CartContext);
  const { cart, getTotalQuantity, clearCart } = data;

  const [orderId, setOrderId] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const formHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const total = getTotalQuantity();
    const order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    try {
      let createOrder = collection(db, "orders");
      const res = await addDoc(createOrder, order);
      setOrderId(res.id);

      let updateProductUnits = collection(db, "products");
      for (let item of order.items) {
        const productId = item.id;
        const productRef = doc(updateProductUnits, productId);
        await updateDoc(productRef, { stock: item.stock - item.quantity });
      }

      clearCart();
    } catch (error) {
      console.error("Error creating order:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    return (
      <div className="checkout-container">
        <div className="checkout-success">
          <h2 className="checkout-success-title">Thank you for your purchase!</h2>
          <p>Your order number is: {orderId}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Complete your purchase</h2>
      <form onSubmit={formHandler} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={userInfo.name}
          onChange={handleInputChange}
          className="checkout-input"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={userInfo.phone}
          onChange={handleInputChange}
          className="checkout-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={userInfo.email}
          onChange={handleInputChange}
          className="checkout-input"
          required
        />
        <button
          type="submit"
          className="checkout-button"
          disabled={loading}
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;