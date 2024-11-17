import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext";
import { useContext } from "react";
import { Box, Pagination, Skeleton } from "@mui/material";
import "../../common/cardProduct/card.css";
import usePagination from "../../../hooks/usePaginate";

const ItemListContainer = () => {
  const { products } = useContext(ProductContext);
  const { name } = useParams();
  const filteredItems = name
    ? products.filter((product) => product.category === name)
    : products;

  // Paginado
  const itemsPerPage = 6;
  const { currentItems, currentPage, totalPages, handlePageChange } =
    usePagination(filteredItems, itemsPerPage);

  // Return temprano para mostrar skeletons
  if (products.length === 0) {
    return (
      <div className="product-cards-container">
        {Array.from({ length: 6 }).map((_, index) => (
          <Box key={index} className="product-card">
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              sx={{ borderRadius: "4px" }}
            />
            <Box sx={{ p: 2 }}>
              <Skeleton
                variant="text"
                height={30}
                width="200px"
                sx={{ mb: 1 }}
              />
              <Skeleton variant="text" height={20} width="100%" />
            </Box>
            <Skeleton
              variant="rectangular"
              height={40}
              width="50%"
              sx={{ mt: "auto", borderRadius: "4px" }}
            />
          </Box>
        ))}
      </div>
    );
  }

  return (
    <Box>
      {name ? (
        <ItemList items={filteredItems} />
      ) : (
        <>
          <ItemList items={currentItems} />
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={{ marginTop: 4, marginBottom: 4, justifyItems: "center" }}
          />
        </>
      )}
    </Box>
  );
};

export default ItemListContainer;
