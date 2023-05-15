import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { urlAxios } from "../../utils";
import styles from "./User.module.scss";
//CreateProduct el formulario para crear nuevo producto dentro de ventas---> /user

function User() {
  const navigate = useNavigate();
  // const { pathname } = useLocation();
  const checkAuch = async () => {
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
      <button onClick={() => navigate("/user/create_product")}>
        CREAR PRODUCTO
      </button>
    </div>
  );
}

export default User;
