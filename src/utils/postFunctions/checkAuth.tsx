import Swal from "sweetalert2";
import { urlAxios } from "..";

const checkAuth = async (route: string, navigate: Function) => {
  const user: any = window.localStorage.getItem("user");
  let id;
  let config;

  if (!user) {
    id = "";
    config = {
      headers: { _id: id },
    };
  } else {
    id = JSON.parse(user);
    config = {
      headers: { _id: id.id },
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

  return;
};

export default checkAuth;
