import { useState } from "react";
export const ProductList = () => {
  const [products, setProducts] = useState([]);
//   console.log(products);
  fetch("http://localhost:8000/products")
    .then((response) => response.json())
    .then((data) => setProducts(data));
  return <div>ProductList</div>;
};
