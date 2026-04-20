import "./card.css";
import { Link } from "react-router-dom";

export default function ProductCards({ products }) {
  return (
    <div className="product-cards-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="product-card-image"
          />
          <div className="product-card-content">
            <h3 className="product-card-title">{product.title}</h3>
            <p className="product-card-price">${product.price}</p>
          </div>
          <div className="product-card-actions">
            <Link to={`/itemDetail/${product.id}`}>
              <button className="product-card-button">View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}