import React, { useState, useEffect } from "react";
import { getProducts } from "../services/api";
import ProductCard from "./ProductCard";

const ProductType1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);
  const loadProducts = async () => {
    try {
      const res = await getProducts("type_1");
      setProducts(res.data);
    } catch (error) {
      console.log("error form productType1:", error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} type={"type_1"} />
        ))}
      </div>
    </div>
  );
};

export default ProductType1;
