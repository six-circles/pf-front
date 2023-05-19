import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth} from "../../utils";
import styles from "./User.module.scss";
import { CgProfile } from "react-icons/cg";
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
        <h1 onClick={() => navigate("/user")} className={styles.icon}>
          <CgProfile />
        </h1>
        <div className={styles.perfil}>
          <h3 className={styles.title}  onClick={() => navigate("/user")}>Mis Datos</h3>
          <Link to="/user/shopping">Compras</Link>
          <Link to="/user/products">Ventas</Link>
          <Link to="/user/qa">Preguntas</Link>
          <Link to="/user/favoritos">Favoritos</Link>
          <Link to="#">Salir</Link>
        </div>
      </div>

      {/* <button
        onClick={() => navigate("/user/products/create_product")}
        className={styles.crearProd}
      > 
        
        CREAR PRODUCTO
      </button> */}
    </div>
  );
}

export default User;
