import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CartReducer from "./reducers/CartReducer";
import Reducer1 from "./reducers/Reducer1";
import Reducer2 from "./reducers/Reducer2";

const rootReducer = combineReducers({
  product1Reducer: Reducer1,
  product2Reducer: Reducer2,
  cartReducer: CartReducer,
});

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
