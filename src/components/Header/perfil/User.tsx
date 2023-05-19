import styles from "./User.module.scss";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function User() {
  const navigate = useNavigate();
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
      }
    })
  };

  return (
    <div>
      <div className={styles.contenedor}>
        <a href="/user" className={styles.links}>
          {" "}
          Mi Perfil
        </a>
        <a className={styles.links} onClick={handleClick}>
          Salir
        </a>
      </div>
    </div>
  );
}
