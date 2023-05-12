// import React from "react";
import styles from "./Login.module.scss";
import { GrFacebookOption, GrGoogle, GrApple } from "react-icons/gr";
import logo from "../../assets/icons/logo.svg";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.overlayContainer}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.formContainer}>
        <form action="#">
          <h2>Iniciar sesión</h2>
          <div className={styles.socialContainer}>
            <a href="#">
              <GrGoogle />
            </a>
            <a href="#">
              <GrApple />
            </a>
            <a href="#">
              <GrFacebookOption />
            </a>
          </div>
          <div className={styles.inputs}>
            <label htmlFor="">Usuario</label>
            <input type="email" />
            <br />
            <br />
            <label htmlFor="">Contraseña</label>
            <input type="password" />
          </div>
          <br />
          <div className={styles.links}>
            <a href="#">Crear cuenta</a>
            <a href="#">Olvidé mi contraseña</a>
          </div>
          <br />
          <button>Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
