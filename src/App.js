import React, { Fragment, useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import CustomNavbar from "./component/CustomNavbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_CART } from "./actions/types";
import { getCart } from "./services/api";

function App() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState();

  //render the component
  useEffect(() => {
    laodCart();
  }, []);

  const laodCart = async () => {
    console.log("loadCart");
    try {
      const res = await getCart();
      dispatch({
        type: LOAD_CART,
        payload: res.data,
      });
    } catch (error) {
      console.log("Error from Home, loadCart: ", error);
    }
  };

  const cartItemCount = useSelector((state) =>
    state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  );
  return (
    <Fragment>
      <CustomNavbar quantity={cartItemCount} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:type/:id" component={Product} />
        <Route exact path="/cart" component={Cart}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
