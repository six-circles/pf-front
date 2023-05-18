import productsUtils from "./products";
import urlAxios from "./clientAxios";
import heroSliderData from "./data-slider";
import detailFetch from "./detailFetch";
import { DetailProd } from "./interfaces";
import { createProduct } from "./postFunctions/products";
import checkAuth from "./postFunctions/checkAuth";
import getToken from "./postFunctions/getToken";

export {
  getToken,
  productsUtils,
  urlAxios,
  heroSliderData,
  detailFetch,
  createProduct,
  checkAuth,
};
export type { DetailProd };
