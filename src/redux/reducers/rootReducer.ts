import { combineReducers } from "redux";
import productsReducer from "./products";
import carritoReducer from "./carrito";
import favoritosReducer from "./favoritos";
const rootReducer = combineReducers({
  products: productsReducer,
  carrito: carritoReducer,
  favoritos: favoritosReducer,
});

export default rootReducer;
