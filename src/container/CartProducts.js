import React, { useEffect, useState } from "react";
import { getCart } from "../services/api";
import CartCard from "./CartCard";

const CartProducts = () => {
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts);

  useEffect(() => {
    loadCartProducts();
  }, []);

  const loadCartProducts = async () => {
    try {
      const res = await getCart();
      setCartProducts(res.data);
    } catch (error) {
      console.log("Error form Cart.js loadCartProducts", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {cartProducts.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CartProducts;
