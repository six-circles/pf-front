import { urlAxios } from "../../utils";
import { AnyAction, Dispatch } from "redux";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const ORDER_PRODUCTS ="ORDER_PRODUCTS";
export const VIEW_COMMENTS="VIEW_COMMENTS";
export const POST_COMMENTS="POST_COMMENTS";
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
interface Dispatch{
  type:string,
  payload:any
}
export const orderProducts= (order:any )=>{
  return  (dispatch:any) => {
    
dispatch ({
  type: ORDER_PRODUCTS,
  payload: order,
  })
}}
export const viewComments= (view:any )=>{
  return  (dispatch:any) => {
    
dispatch ({
  type: VIEW_COMMENTS,
  payload: view,
  })
}}
export const postComments= (post:any )=>{
  return  (dispatch:any) => {
    
dispatch ({
  type: POST_COMMENTS,
  payload: post,
  })
}}
