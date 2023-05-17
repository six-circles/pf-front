import Swal from "sweetalert2";
import { urlAxios } from "..";

const checkAuth = async (route: string, navigate: Function) => {
  const user: any = window.localStorage.getItem("user");
  let token;
  let config;

  if (!user) {
    token = "";
    config = {
      headers: { token },
    };
  } else {
    token = JSON.parse(user).token;
    config = {
      headers: { token },
    };
  }

  try {
    await urlAxios.post(`/${route}`, null, config);
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
