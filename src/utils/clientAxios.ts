import axios from "axios";

const urlAxios = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL,
});

export default urlAxios;
