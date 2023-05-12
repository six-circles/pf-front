import { urlAxios } from "../../utils";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";

export const getProducts = () => {
  return async (dispatch: Function) => {
    const { data } = await urlAxios("/product");

    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  };
};

export const getProductDetail = (id: string | undefined) => {
  return async (dispatch: Function) => {
    const { data } = await urlAxios(`/product/${id}`);

    console.log(data[0]);

    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: data[0],
    });
  };
};
