
// import React from "react";
import styles from "./Login.module.scss"
// import { GrFacebookOption, GrGoogle, GrApple } from "react-icons/gr"
import logo from "../../assets/icons/logo.svg";
import { useState } from "react";

interface Credentials {
  email: string;
  password: string;
}

interface Validation {
  email: boolean;
  password: boolean;
}

function Login() {
  const [credentials, setCredentials] = useState<Credentials>({ email: "", password: "" });
  const [validation, setValidation] = useState<Validation>({ email: false, password: false });
  const [showErrors, setShowErrors] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });

    setShowErrors(true);
    if (showErrors) {
      setValidation({ ...validation, [name]: validateField(name, value) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);

    if (validation.email && validation.password) {
      console.log("Iniciando sesión...");
    }
  };

  const validateField = (name: string, value: string): boolean => {
    switch (name) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      case "password":
        return value.length >= 6;
      default:
        return false;
    }
  };

  const buttonEna = showErrors && !(validation.email && validation.password)

  return (
    <div className={styles.container}>
      <div className={styles.overlayContainer}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          {/* <div className={styles.socialContainer}>
            <a href="#"><GrGoogle /></a>
            <a href="#"><GrApple /></a>
            <a href="#"><GrFacebookOption /></a>
          </div> */}
          <div className={styles.inputs}>
            <label htmlFor="">Usuario</label>
            <input type="email" name="email" value={credentials.email} onChange={handleInputChange} />
            {showErrors && !validation.email && (<p>Por favor, ingresa un correo electrónico válido.</p>)}
            <br /><br />
            <label htmlFor="">Contraseña</label>
            <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
            {showErrors && !validation.password && (
              <p>La contraseña debe tener al menos 6 caracteres.</p>
            )}
          </div>
          <br />
          <div className={styles.links}>
            <a href="/login/create_user">Crear cuenta</a>
            <a href="#">Olvidé mi contraseña</a>
          </div>
          <br />
          <button type="submit" disabled={buttonEna}>Iniciar sesión</button>
        </form>
      </div >

    </div >
  );

}
export default Login;