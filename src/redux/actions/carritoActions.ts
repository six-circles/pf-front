import { getToken, urlAxios } from "../../utils";

const { token } = getToken();

export const GET_CART_PRODUCTS = "GET_CART_PRODUCTS";

export const getCartProducts = () => {
  return async (dispatch: Function) => {
    try {
      const { data } = await urlAxios(`/${token}/shoppingCart`);
      dispatch({
        type: GET_CART_PRODUCTS,
        payload: data,
      });
    } catch (err: any) {
      console.error(err.response.data);
    }
  };
};
