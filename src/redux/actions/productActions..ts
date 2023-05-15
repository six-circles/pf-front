import { urlAxios } from "../../utils";

export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const ORDER_PRODUCTS = "ORDER_PRODUCTS";
export const VIEW_COMMENTS = "VIEW_COMMENTS";
export const POST_COMMENTS = "POST_COMMENTS";

export const clearProducts = () => {
  return (dispatch: Function) => {
    dispatch({ type: CLEAR_PRODUCTS });
  };
};

export const getProducts = (title: string | undefined = "") => {
  return async (dispatch: Function) => {
    let data;
    try {
      if (!title) {
        data = await urlAxios("/product");
      } else {
        data = await urlAxios(`/product?title=${title}`);
      }
      dispatch({
        type: GET_PRODUCTS,
        payload: data.data,
      });

    } catch (error:any) {
      if(error.message.includes(404)){
      alert("No se encontró el producto buscado")
      }
      console.log(error.message)
    }

   
  };
};

export const getProductDetail = (id: string | undefined) => {
  return async (dispatch: Function) => {
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

export const orderProducts = (order: string) => {
  return (dispatch: any) => {
    dispatch({
      type: ORDER_PRODUCTS,
      payload: order,
    });
  };
};

export const viewComments = (view: any) => {
  return (dispatch: any) => {
    dispatch({
      type: VIEW_COMMENTS,
      payload: view,
    });
  };
};

export const postComments = (post: any) => {
  return (dispatch: any) => {
    dispatch({
      type: POST_COMMENTS,
      payload: post,
    });
  };
};
