import { combineReducers } from "redux";
import productsReducer from "./products";
import carritoReducer from "./carrito";

const rootReducer = combineReducers({
  products: productsReducer,
  carrito: carritoReducer,
});

export default rootReducer;
