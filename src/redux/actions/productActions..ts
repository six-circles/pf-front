import Swal from "sweetalert2";
import { urlAxios } from "../../utils";

export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const ORDER_PRODUCTS = "ORDER_PRODUCTS";
export const VIEW_COMMENTS = "VIEW_COMMENTS";
export const POST_COMMENTS = "POST_COMMENTS";
export const POST_QUESTIONS = "QUESTIONS";
export const POST_ANSWERS = "POST_ANSWERS";
export const SELECT_PAGE = "SELECT_PAGE";

export const clearProducts = () => {
  return (dispatch: Function) => {
    dispatch({ type: CLEAR_PRODUCTS });
  };
};

export const getProducts = (query?: any) => {
  return async (dispatch: Function) => {
    let data;
    // `/product?index1=${index1}&index2=${index2}&${order}=${type}`

    try {
      // if (!title) {
      //   data = await urlAxios(`/product?${order}=${type}`);
      // } else {
      //   data = await urlAxios(`/product?title=${title}&${order}=${type}`);
      // }

      // if (query) {
      data = await urlAxios(`/product?${query}`);
      // } else {
      // data = await urlAxios(`/product`);
      // }
      dispatch({
        type: GET_PRODUCTS,
        payload: data.data,
      });
    } catch (error: any) {
      if (error.message.includes(404)) {
        Swal.fire({
          icon: "error",
          title: "No se encontraron productos",
        });
      }
      // console.log(error.message);
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

export const Questions = (questions: any) => {
  return (dispatch: any) => {
    dispatch({
      type: POST_QUESTIONS,
      payload: questions,
    });
  };
};

export const postAnswers = (answer: any) => {
  return (dispatch: any) => {
    dispatch({
      type: POST_ANSWERS,
      payload: answer,
    });
  };
};

export const selectPage = (page: number = 0) => {
  return (dispatch: Function) => {
    dispatch({
      type: SELECT_PAGE,
      payload: page,
    });
  };
};
