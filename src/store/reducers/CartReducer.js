import React from "react";
import { GET_CART, POST_CART } from "../Actions";

const CartReducer = (state = [], action) => {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {
    case GET_CART:
      return action.data;

    case POST_CART:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex((item) => item.id === action.id);
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.data, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return updatedCart;

    default:
      return state;
  }
};

export default CartReducer;
