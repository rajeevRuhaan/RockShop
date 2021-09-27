import React from "react";
import {
  ADD_TO_CART,
  LOAD_CART,
  POST_CART,
  DELETE_CART_PRODUCT_QUANTITY,
} from "../actions/types";

const cartReducer = (state = [], action) => {
  const { type, payload } = action;
  let updateCart = [...state];

  switch (type) {
    case LOAD_CART:
      return payload;

    case ADD_TO_CART:
      let isProductInCart = false;
      for (let product of updateCart) {
        if (product.id === payload.id) isProductInCart = true;
      }
      if (isProductInCart) {
        updateCart = state.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        updateCart = [...state, payload];
      }
      return updateCart;

    case DELETE_CART_PRODUCT_QUANTITY:
      let isCartProductQuantityMoreThan1 = false;
      for (let product of updateCart) {
        if (product.id === payload.id) {
          if (product.id > 1) isCartProductQuantityMoreThan1 = true;
        }
        if (isCartProductQuantityMoreThan1) {
          updateCart = state.map((item) => {
            if (item.id === payload.id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        } else {
          updateCart = [...state, payload];
        }
      }
      return updateCart;

    default:
      return state;
  }
};

export default cartReducer;
