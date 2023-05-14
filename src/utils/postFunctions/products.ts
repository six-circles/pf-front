import { urlAxios } from "..";

export const createProduct = async (form: object) => {
  try {
    const { data } = await urlAxios.post("/product", form);
    return data;
  } catch (error: any) {
    alert(error.response.data.error);
  }
};
