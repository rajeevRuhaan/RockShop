import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CartReducer from "./cartReducer";

const rootReducer = combineReducers({
  cart: CartReducer,
});

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
