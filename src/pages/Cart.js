import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProducts from "../container/CartProducts";
import { getAllFromCart } from "../services/apiCart";
import { GET_CART } from "../store/Actions";

function Cart(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  const loadCartData = async () => {
    const res = await getAllFromCart();

    dispatch({
      type: GET_CART,
      data: res,
    });
  };
  useEffect(() => {
    loadCartData();
  }, []);

  return (
    <div>
      This is cart page
      <CartProducts cartData={cart} />
    </div>
  );
}

export default Cart;
