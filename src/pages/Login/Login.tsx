// import React from "react";
import styles from "./Login.module.scss";
import { GrGoogle } from "react-icons/gr" //GrApple, GrFacebookOption
import logo from "../../assets/icons/logo.svg";
import { validateField, firstValidateField } from "./validate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlAxios } from "../../utils";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

interface Credentials {
  email: string;
  password: string;
}

function Login() {
  const urlBack = import.meta.env.VITE_BACK_URL || '';
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
    setMessage("");

    if (errors.email === "" && errors.password === "") {
      try {
        let data = await urlAxios.post("/login", credentials);

        if (data.status === 202) {
          window.localStorage.setItem("user", JSON.stringify(data.data));
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Bienvenido a Six Circles",
            showConfirmButton: false,
            timer: 2000
          });
          navigate("/");
        }
      } catch (error: any) {
        // console.log(error.message);
        // console.log(error.response.data)
        // console.log(error.response.status)
        setMessage("Usuario o contraseña incorrecta");
        // if (error.response.status === 401) alert("Contraseña incorrecta");
        // if (error.response.status === 404) alert("Usuario no encontrado");
      }
    } else {
      setErrors(firstValidateField({ ...credentials }, errors));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlayContainer}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          <div className={styles.socialContainer}>
            <Link to={`${urlBack}/auth/google`}><GrGoogle /></Link>
            {/* <Link to="#"><GrApple /></Link>
            <Link to="#"><GrFacebookOption /></Link> */}
          </div>
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

            <br />
            <br />
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
          <br />
          <div className={styles.links}>
            <a href="/register">Crear cuenta</a>
            <a href="#">Olvidé mi contraseña</a>
          </div>
          {message && <p className={styles.message}>{message}</p>}
          <br />
          <button type="submit">Iniciar sesión</button><br />
          <a href="/" className={styles.buttonInvitado} >Continuar como invitado</a>
        </form>
      </div>
    </div>
  );
}
export default Login;