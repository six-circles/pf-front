import { urlAxios } from "..";

const checkAuch = async (route: string, navigate: Function) => {
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
    // console.error(error.response.data);
    if (data === "You need to be logged in") {
      navigate("/login");
    }
  }

  return;
};

export default checkAuch;
