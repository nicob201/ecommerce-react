import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        <button className="not-found-button">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;