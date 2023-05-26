import Swal from "sweetalert2";
import { getToken, urlAxios } from "..";

const checkAuth = async (route: string, navigate: Function) => {
  const { config } = getToken();

  // if (token) {
  try {
    await urlAxios.post(`/${route}`, null, config);
  } catch (err: any) {
    console.log(err);
    const { error }: any = err.response.data;
    console.log(error);
    if (error === "You need to be logged in") {
      Swal.fire({
        title: "Debes estar registrado",
        icon: "warning",
      }).then(() => navigate("/login"));
    }
  }
  // }
  // else {
  //   Swal.fire({
  //     title: "Debes estar registrado",
  //     icon: "warning",
  //   }).then(() => navigate("/login"));
  // }
};

export default checkAuth;
