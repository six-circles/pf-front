import { urlAxios } from "../../utils";

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => {
  return async (dispatch: Function) => {
    const { data } = await urlAxios.get("/product");

    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  };
};
