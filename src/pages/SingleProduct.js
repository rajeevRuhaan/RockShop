import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../services/apiCart";
import { POST_CART } from "../store/Actions";

const SingleProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const singleproduct1 = useSelector((state) => state.product1Reducer);

  const handleAddToCArt = async (singleproduct1) => {
    const sendToCart = { ...singleproduct1, quantity: 1 };
    const res = await AddToCart(sendToCart);
    dispatch({
      type: POST_CART,
      data: res,
    });
  };

  return (
    <div className="product">
      <img src={singleproduct1.image} />
      <div>
        <h2>{singleproduct1.name}</h2>
        <p>Price: {singleproduct1.price} $</p>
        <p>Click on add to cart to buy this product</p>
        <button onClick={() => handleAddToCArt(singleproduct1)}>
          Add to cart
        </button>
        <button onClick={() => history.goBack()}>Back To Product List</button>
      </div>
    </div>
  );
};

export default SingleProduct;
