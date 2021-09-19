import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CartReducer from "./reducers/CartReducer";
import Reducer from "./reducers/Reducer";
import Reducer2 from "./reducers/Reducer2";

const rootReducer = combineReducers({
  red1: Reducer,
  red2: Reducer2,
  cart: CartReducer,
});

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
