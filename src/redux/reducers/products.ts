import { GET_PRODUCTS, GET_PRODUCT_DETAIL, ORDER_PRODUCTS } from "../actions/productActions.";

const initialState = {
  products: [],
  allProducts: [],
  detail: {},
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
  if (action.payload.some((item: any) => item.name === 'name')) {
    const sortedProducts = [...state.products].sort((a: any, b: any) =>
      a.name.localeCompare(b.name)
    );
    return {
      ...state,
      products: sortedProducts,
    };
  }
  return state;

        
      

        

    default:
      return state;
  }
};

export default productsReducer;
