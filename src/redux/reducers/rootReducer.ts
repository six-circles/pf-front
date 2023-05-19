import { combineReducers } from "redux";
import productsReducer from "./products";

const rootReducer = combineReducers({
  products: productsReducer,
  // carrito: carritoReducer,
});

export default rootReducer;
