import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth, urlAxios } from "../../utils";
import styles from "./User.module.scss";
import { CgProfile } from "react-icons/cg"
import { Link } from "react-router-dom";
//CreateProduct el formulario para crear nuevo producto dentro de ventas---> /user

function User() {
  const navigate: Function = useNavigate();

  useEffect(() => {
    checkAuth("product", navigate);
  }, []);

  return (
    <div className={styles.user}>
      <div className={styles.contenedorPerfil}>
        <h1  onClick={()=>navigate("/user")} className={styles.icon}><CgProfile/></h1>
        <div className={styles.perfil}>
          <h3  className={styles.title}>Mis Datos</h3>
          <Link to="#">Compras</Link>
          <Link to="#">Ventas</Link>
          <Link to="#">Preguntas</Link>
          <Link to="#">Salir</Link>
        </div>
      </div>

      <button onClick={() => navigate("/user/create_product")} className={styles.crearProd}>
        CREAR PRODUCTO
      </button>
    </div>
  );
}

export default User;
