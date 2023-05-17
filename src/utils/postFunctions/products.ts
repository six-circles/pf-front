import { urlAxios } from "..";
import Swal from "sweetalert2";

export const createProduct = async (form: object) => {
  try {
    const { data } = await urlAxios.post("/product", form);
    return data;
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: error.response.data.error,
    });
  }
};
