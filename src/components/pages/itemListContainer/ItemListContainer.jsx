import { useState, useEffect } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const filteredItems = name
      ? products.filter((product) => product.category === name)
      : products;
    const getProducts = new Promise((resolve) => {
      resolve(name ? filteredItems : products);
    });
    getProducts.then((res) => setItems(res));
  }, [name]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
