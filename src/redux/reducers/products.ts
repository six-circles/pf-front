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
  
    return {
      ...state,
      products: [...state.products.sort((a:any,b:any )=>{
        if (action.payload==='mayor'){
        return b.price - a.price
      }else {
        return a.price - b.price
      }
      })],
    };
  
 

        
      

        

    default:
      return state;
  
};}

export default productsReducer;
