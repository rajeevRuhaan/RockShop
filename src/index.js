import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./store/Store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
