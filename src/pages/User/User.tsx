import CreateProduct from "../../components/User/CreateProduct/CreateProduct";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { urlAxios } from "../../utils";
import styles from "./User.module.scss";
//CreateProduct el formulario para crear nuevo producto dentro de ventas---> /user

function User() {
  const navigate = useNavigate();
  // const { pathname } = useLocation();
  const checkAuch = async () => {
    const id = window.localStorage.getItem("Auth");
    const config = {
      headers: { _id: id },
    };

    try {
      await urlAxios.post("/product", null, config);
    } catch (error: any) {
      const { data } = error.response;
      console.error(error.response.data);
      if (data === "You need to be logged in") {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    checkAuch();
  }, []);

  return (
    <div className={styles.user}>
      <div>perfil usuario</div>
      <CreateProduct />
    </div>
  );
}

export default User;
