import Swal from "sweetalert2";
import { urlAxios } from "..";
import {getToken} from "../index"
const checkAuth = async (route: string, navigate: Function) => {
  // const user: any = window.localStorage.getItem("user");

  // let token;
  // let config;

  // if (!user) {
  //   token = "";
  //   config = {
  //     headers: { token },
  //   };
  // } else {
  //   token = JSON.parse(user).token;
  //   config = {
  //     headers: { token },
  //   };
  // }
  
    const info = getToken()
    const config = info.config
    const token = info.token
  

  try {
    await urlAxios.post(`/${route}`, token, config);
  } catch (error: any) {
    const { data } = error.response;
    if (data === "You need to be logged in") {
      Swal.fire({
        title: "Debes estar registrado",
        icon: "warning",
      }).then(() => navigate("/login"));
    }
  }
};

export default checkAuth;
