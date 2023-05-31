import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAIL,
  VIEW_COMMENTS,
  POST_COMMENTS,
  CLEAR_PRODUCTS,
  POST_ANSWERS,
  SELECT_PAGE,
  GET_QUESTIONS,
} from "../actions/productActions.";

const initialState = {
  products: [],
  allProducts: [],
  detail: {},
  view: [],
  post: [],
  currentPage: 0,
  totalPages: 1,
};

interface Payload {
  products: object[];
  cantidad: number;
}

interface Action {
  type: string;
  payload: Payload;
}

const productsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload.products],
        allProducts: [...action.payload.products],
        totalPages: action.payload.cantidad,
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

    case POST_ANSWERS:
      return {
        ...state,
        answer: { ...action.payload },
      };

    case SELECT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

      case GET_QUESTIONS:
        return {
          ...state,
          detail: { ...action.payload },
        };
    default:
      return state;
  }
};

export default productsReducer;
