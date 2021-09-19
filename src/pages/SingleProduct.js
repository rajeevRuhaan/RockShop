import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../services/apiCart";
import { POST_CART } from "../store/Actions";

const SingleProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const singleproductdata = useSelector((state) => state.red1);

  const handleAddToCArt = (singleproductdata) => {
    return async (dispatch) => {
      const res = await AddToCart(singleproductdata);
      dispatch({
        type: POST_CART,
        data: res,
      });
    };
  };

  return (
    <div className="product">
      <img src={singleproductdata.image} />
      <div>
        <h2>{singleproductdata.name}</h2>
        <p>Price: {singleproductdata.price}</p>
        <button onClick={() => dispatch(handleAddToCArt(singleproductdata))}>
          Add to cart
        </button>
        <button onClick={() => history.goBack()}>Back To Product List</button>
      </div>
    </div>
  );
};

export default SingleProduct;
