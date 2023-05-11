import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => {
  return async (dispatch: Function) => {
    const url: string = "http://localhost:3001/product";
    const { data } = await axios.get(url);

    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  };
};
