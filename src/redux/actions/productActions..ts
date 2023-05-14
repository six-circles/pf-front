import { urlAxios } from "../../utils";
import { AnyAction, Dispatch } from "redux";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";

export const getProducts = (title: string | undefined = "") => {
  return async (dispatch: Dispatch<AnyAction>) => {
    let data;
    if (!title) {
      data = await urlAxios("/product");
    } else {
      data = await urlAxios(`/product?title=${title}`);
    }

    dispatch({
      type: GET_PRODUCTS,
      payload: data.data,
    });
  };
};

export const getProductDetail = (id: string | undefined) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const { data } = await urlAxios(`/product/${id}`);

      dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: data[0],
      });
    } catch (error) {
      console.error(error);
    }
  };
};
