import styles from "./User.module.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getUserRemote } from "../../utils";
function User() {
  const navigate: Function = useNavigate();
  const { pathname } = useLocation();

  // useEffect(() => {
  //   checkAuth("product", navigate);
  // }, []);

  const { enable }: any = getUserRemote();

  const handleClick = () => {
    Swal.fire({
      title: "¿Desea cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, salir!",
    }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.setItem("user", "");
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  };

  // const navLinkStyles = ({ isActive }: any) => {
  //   return {
  //     color: isActive ? "blue" : "",
  //   };
  // };

  return (
    <div className={styles.perfil}>
      <Link className={pathname === "/user" ? styles.active : ""} to="/user">
        Mis Datos
      </Link>
      <NavLink
        to="/user/shopping"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Compras
      </NavLink>
      <NavLink
        to="/user/products"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Ventas
      </NavLink>
      <NavLink
        to="/user/qa"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Preguntas
      </NavLink>
      <NavLink
        to="/user/favoritos"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Favoritos
      </NavLink>
      {enable ? <NavLink
        to="/user/admin"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Administrador
      </NavLink> : null}
      <Link to="/login" onClick={handleClick}>
        Salir
      </Link>
    </div>
  );
}

export default User;
