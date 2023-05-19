import { GET_CART_PRODUCTS } from "../actions/carritoActions";

const initialState = {
  cartProducts: [],
};

interface Action {
  type: string;
  payload: object[];
}

const carritoReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case GET_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: [...payload],
      };

    default:
      return state;
  }
};

export default carritoReducer;
