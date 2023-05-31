// import React from "react";
import styles from "./Login.module.scss";
import { BsGoogle } from "react-icons/bs";
import logo from "../../assets/icons/logo.svg";
import { validateField, firstValidateField } from "./validate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlAxios } from "../../utils";
import Swal from "sweetalert2";

interface Credentials {
  email: string;
  password: string;
}

function Login() {
  const urlBack = import.meta.env.VITE_BACK_URL || "";
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [message, setMessage] = useState<any>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });

    setErrors(validateField({ ...credentials, [name]: value }, errors));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMessage("");

    if (errors.email === "" && errors.password === "") {
      try {
        let data = await urlAxios.post("/login", credentials);

        if (data.status === 202) {
          window.localStorage.setItem("user", JSON.stringify(data.data));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Bienvenido a Six Circles",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/");
        }
      } catch (error: any) {
        setMessage("Usuario o contraseña incorrecta");
      }
    } else {
      setErrors(firstValidateField({ ...credentials }, errors));
    }
  };

  const GoogleCallback = (event: React.FormEvent) => {
    event.preventDefault();
    window.location.href = `${urlBack}/auth/google`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlayContainer}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          <div className={styles.inputs}>
            <label htmlFor="">Correo</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              autoComplete="email"
              onChange={handleInputChange}
            />

            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              autoComplete="current-password"
              onChange={handleInputChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className={styles.links}>
            <a href="/register">Crear cuenta</a>
            <a href="/recuperar-pass">Olvidé mi contraseña</a>
          </div>
          {message && <p className={styles.message}>{message}</p>}
          <button className={styles.buttonLocal} type="submit">
            Iniciar sesión
          </button>
          <br />
          <a href="/" className={styles.buttonInvitado}>
            Continuar como invitado
          </a>
        </form>

        <div className={styles.socialContainer}>
          <button onClick={GoogleCallback}>
            <BsGoogle /> Iniciar sesión con Google
          </button>
          {/* <button onClick={GoogleCallback}><BsFacebook />  Iniciar sesión con Facebook</button>
          <button onClick={GoogleCallback}><BsApple />  Iniciar sesión con Apple</button> */}
        </div>
      </div>
    </div>
  );
}
export default Login;
