import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, updateCart, postCart } from "../services/api";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../actions/types";

const Product = () => {
  const { type, id } = useParams();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    id: "",
    image: "",
    name: "",
    price: "",
  });

  useEffect(() => {
    loadProduct();
  }, [id]);

  const [loading, setLoading] = useState(false);

  const loadProduct = async () => {
    try {
      setLoading(true);
      const res = await getProduct(type, id);
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Error form product.js loadProduct:", error);
      setLoading(false);
    }
  };
  // handle to add product to cart
  const handleAddToCart = async () => {
    try {
      //1) send cart to db(post or put)
      let isProductInCart = false;
      for (let item of cart) {
        if (item.id === product.id) isProductInCart = true;
      }
      if (isProductInCart) {
        await updateCart({
          ...product,
          quantity: cart.find((item) => item.id === product.id).quantity + 1,
        });
      } else {
        await postCart({ ...product, quantity: 1 });
      }
      window.alert("The product has been added to cart");
      //update cart in redux store
      dispatch({
        type: ADD_TO_CART,
        payload: { ...product, quantity: 1 },
      });
    } catch (error) {
      console.log("Error is from Products.js handleAddToCart", error);
    }
  };

  return (
    <div className="card-product" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <div className="d-flex justify-content-between my-3">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price : ${product.price}</p>
        </div>
        <div className="d-flex justify-content-between">
          <Link to="/products" class="btn btn-primary">
            Back to Products
          </Link>
          <button className="btn btn-success" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
