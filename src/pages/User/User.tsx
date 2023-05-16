import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth, urlAxios } from "../../utils";
import styles from "./User.module.scss";
//CreateProduct el formulario para crear nuevo producto dentro de ventas---> /user

function User() {
  const navigate: Function = useNavigate();

  useEffect(() => {
    checkAuth("product", navigate);
  }, []);

  return (
    <div className={styles.user}>
      <div>perfil usuario</div>
      <button onClick={() => navigate("/user/create_product")} className={styles.crearProd}>
        CREAR PRODUCTO
      </button>
    </div>
  );
}

export default User;
