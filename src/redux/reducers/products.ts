import { GET_PRODUCTS } from "../actions/productActions.";

const initialState = {
  products: [],
  allProducts: [],
  // detail: {},
};

interface Action {
  type: string;
  payload: object[];
}

const productsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
        allProducts: [...action.payload],
      };

    // case GET_PRODUCT_DETAIL:
    //   return {
    //     ...state,
    //     detail: action.payload,
    //   };

    default:
      return state;
  }
};

export default productsReducer;
