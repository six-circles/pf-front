import { urlAxios } from "../utils";
import { useLocation } from "react-router-dom";

export const useDetailProduct = async () => {
  const location = useLocation();
  const searchParams: any = new URLSearchParams(location.search);
  const product = searchParams.get("product");
  const { data } = await urlAxios(`/product/${product}`);

  const prod = {
    title: data.title,
    stock: data.stock,
    price: data.price,
    description: data.description,
  };

  return { product, prod };
};
