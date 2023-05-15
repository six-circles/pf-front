import styles from "./User.module.scss";
import { useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();
//   const username: any = window.localStorage.getItem("user");

  const handleClick = () => {
    const salir = confirm("Desea cerrar sesion?");

    if (salir) {
      window.localStorage.setItem("user", "");
      navigate("/login");
    }
  };

  return (
    <div>
      <div className={styles.contenedor}>
        <a href="/user" className={styles.links}>
          {" "}
          Crear producto
        </a>
        <a className={styles.links} onClick={handleClick}>
          Salir
        </a>
      </div>
    </div>
  );
}
