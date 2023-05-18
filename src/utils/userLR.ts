import { urlAxios } from "./index";

export const getUserLocal = () => {
  const userData: any = window.localStorage.getItem("user");
  let user;
  if (userData) user = JSON.parse(userData);
  return user;
}

export const getTokenAsHeaders = () => {
  const userData: any = window.localStorage.getItem("user");
  let token; let config;

  if (!userData) {
    token = "";
    config = {
      headers: { token },
    };
  } else {
    token = JSON.parse(userData).token;
    config = {
      headers: { token },
    };
  }
  return config;
}

export const getUserRemote = async () => {
  let { data } = await urlAxios.get(`/user/${getUserLocal().token}`)
  let myData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    birthday: data.birthday,
    password: "",
    repeatPassword: "",
    address1: data.address1,
    address2: data.address2,
    card: data.card,
  }
  return myData;
}