import Swal from "sweetalert2";
import { urlAxios } from "../../utils";

export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const ORDER_PRODUCTS = "ORDER_PRODUCTS";
export const VIEW_COMMENTS = "VIEW_COMMENTS";
export const POST_COMMENTS = "POST_COMMENTS";
export const POST_QUESTIONS = "QUESTIONS";
export const POST_ANSWERS = "POST_ANSWERS"
export const clearProducts = () => {
  return (dispatch: Function) => {
    dispatch({ type: CLEAR_PRODUCTS });
  };
};

export const getProducts = (
  title: string | undefined = "",
  order: string | undefined = "",
  type: string | undefined = "",
  index1: number | undefined = 1,
  index2: number | undefined = 50
) => {
  return async (dispatch: Function) => {
    let data;
    try {
      if (!title) {
        data = await urlAxios(
          `/product?index1=${index1}&index2=${index2}&${order}=${type}`
        );
      } else {
        data = await urlAxios(
          `/product?index1=${index1}&index2=${index2}&title=${title}&${order}=${type}`
        );
      }
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
      console.log(id);
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