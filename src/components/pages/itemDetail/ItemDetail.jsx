import Counter from "../../common/counter/Counter";

const ItemDetail = ({ item, addToCart }) => {
  return item && item.id ? (
    <div className="item-detail-container">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="item-detail-image"
      />
      <div className="item-detail-info">
        <h1 className="item-detail-title">{item.title}</h1>
        <p className="item-detail-description">{item.description}</p>
        <p className="item-detail-price">${item.price}</p>
        <p className="item-detail-stock">Stock: {item.stock} units available</p>
        <Counter stock={item.stock} addToCart={addToCart} />
      </div>
    </div>
  ) : (
    <div className="checkout-success">
      <h2 className="checkout-success-title">Product not found</h2>
    </div>
  );
};

export default ItemDetail;