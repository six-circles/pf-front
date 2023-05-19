import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth} from "../../utils";
import styles from "./User.module.scss";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function User() {
  const navigate: Function = useNavigate();

  useEffect(() => {
    checkAuth("product", navigate);
  }, []);

  const handleClick = () => {

    Swal.fire({
      title: '¿Desea cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, salir!'
    }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.setItem("user", "");
        navigate("/login");
      }else{
        navigate("/")
      }
    })
  };


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
          <Link to="login" onClick={handleClick} >Salir</Link>
        </div>
      </div>
    </div>
  );
}

export default User;
