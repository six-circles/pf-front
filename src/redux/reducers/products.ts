import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAIL,
  ORDER_PRODUCTS,
  VIEW_COMMENTS,
  POST_COMMENTS,
  CLEAR_PRODUCTS,
  POST_QUESTIONS,
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

    case ORDER_PRODUCTS:
      return {
        ...state,
        products: [
          ...state.products.sort((a: any, b: any) => {
            if (action.payload === "mayor") {
              return b.price - a.price;
            } else {
              return a.price - b.price;
            }
          }),
        ],
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
