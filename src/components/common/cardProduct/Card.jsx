import "./card.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProductCards({ products }) {
  return (
    <div className="product-cards-container">
      {products.map((product) => (
        <Card key={product.id} className="product-card">
          <CardMedia
            component="img"
            alt={product.title}
            image={product.imageUrl}
            className="product-card-image"
          />
          <CardContent className="product-card-content">
            <Typography
              variant="h5"
              component="div"
              sx={{
                marginTop: "10px",
                fontSize: 22,
                fontFamily: "Montserrat",
                fontWeight: 700,
                letterSpacing: 1,
                color: "var(--color3)",
              }}
            >
              {product.title}
            </Typography>

            <Typography
              variant="h6"
              component="div"
              sx={{
                marginTop: "10px",
                fontSize: 20,
                fontFamily: "Montserrat",
                color: "var(--color3)",
              }}
            >
              ${product.price}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                marginTop: "10px",
                fontSize: 16,
                fontFamily: "Montserrat",
                color: "var(--color3)",
              }}
            >
              Stock: {product.stock}
            </Typography>
          </CardContent>
          <CardActions className="product-card-actions">
            <Link to={`/itemDetail/${product.id}`}>
              <Button variant="contained" size="small">
                View details
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
