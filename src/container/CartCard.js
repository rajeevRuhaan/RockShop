import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, deleteCart } from "../services/api";
import { DELETE_CART_PRODUCT_QUANTITY } from "../actions/types";

const CartCard = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDeleteCartProduct = async () => {
    try {
      let isCartProductQuantityMoreThan1 = false;
      for (let item of cart) {
        if (item.id === product.id) {
          if (item.quantity > 1) isCartProductQuantityMoreThan1 = true;
        }
      }
      if (isCartProductQuantityMoreThan1) {
        await updateCart({
          ...product,
          quantity: cart.find((item) => item.id === product.id).quantity - 1,
        });
      } else {
        await deleteCart({ ...product });
      }

      dispatch({
        type: DELETE_CART_PRODUCT_QUANTITY,
        payload: { ...product, quantity: product.quantity - 1 },
      });
    } catch (error) {
      console.log("Error from cartCard.js handleDeleteCartProduct", error);
    }
  };
  return (
    <div className="cartCard">
      <div className="col-sm">
        <img
          className="card-img-top"
          src={product.image}
          alt={product.name}
          // style={{ width: "12rem" }}
        />
        <div class="card-body">
          <h5 class="card-title">{product.name}</h5>
          <p class="card-text">Price : ${product.price}</p>
          <p class="card-text">Total : ${product.price * product.quantity}</p>
          <p class="card-text">Quantity : {product.quantity}</p>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-danger" onClick={handleDeleteCartProduct}>
            <i class="bi bi-trash"></i>
            Delete Cart Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
