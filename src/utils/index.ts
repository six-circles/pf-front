import urlAxios from "./clientAxios";
import heroSliderData from "./data-slider";
import detailFetch from "./detailFetch";
import { DetailProd } from "./interfaces";
import { createProduct } from "./postFunctions/products";
import checkAuth from "./postFunctions/checkAuth";
import getToken from "./postFunctions/getToken";
import { getUserLocal, getTokenAsHeaders, getUserRemote } from "./userLR";

export {
  getToken,
  urlAxios,
  heroSliderData,
  detailFetch,
  createProduct,
  checkAuth,
  getUserLocal,
  getTokenAsHeaders,
  getUserRemote,
};
export type { DetailProd };
