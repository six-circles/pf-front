import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAIL,
  VIEW_COMMENTS,
  POST_COMMENTS,
  CLEAR_PRODUCTS,
} from "../actions/productActions.";

const initialState = {
  products: [],
  allProducts: [],
  detail: {},
  view: [],
  post: [],
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

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        detail: { ...action.payload },
      };

    case VIEW_COMMENTS:
      return {
        ...state,
        view: { ...action.payload },
      };

    case POST_COMMENTS:
      return {
        ...state,
        post: { ...action.payload },
      };

    case CLEAR_PRODUCTS: {
      return {
        ...state,
        detail: {},
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
