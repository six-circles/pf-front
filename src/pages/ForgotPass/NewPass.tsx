import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./ForgotPass.module.scss";
import { urlAxios } from "../../utils";
import Swal from "sweetalert2";

function NewPass() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [pass, setPass] = useState({ pass1: "", pass2: "" });
  const { email, token }: string | any = useParams();

  const decEmail = window.atob(email);
  const decToken = window.atob(token);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPass({ ...pass, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (pass.pass1 === pass.pass2) {
      try {
        setIsLoading(true);
        await urlAxios.post(`/reset-password/${decEmail}/${decToken}`, {
          password: pass.pass1,
        });
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Contraseña cambiada",
          timer: 2000,
          position: "center",
        }).then(() => navigate("/"));
      } catch (err: any) {
        Swal.fire({
          icon: "error",
          title: err.response.data.error,
          timer: 2000,
          position: "center",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Las contraseñas deben ser iguales",
        position: "center",
        timer: 2000,
      });
    }
  };

  return (
    <div className={styles.form}>
      <form
        action="submit"
        className={styles.form_cont}
        onSubmit={handleSubmit}
      >
        <div className={styles.form_camp}>
          <label htmlFor="email">Nueva Contraseña</label>
          <input
            type="password"
            id="password"
            name="pass1"
            placeholder="Ingrese su nueva contraseña"
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_camp} style={{ marginTop: "2rem" }}>
          <label htmlFor="email">Repite tu contraseña</label>
          <input
            type="password"
            id="password"
            name="pass2"
            placeholder="Ingrese nuevamente su contraseña"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={isLoading ? styles.wait : ""}
        >
          Cambiar Contraseña
        </button>
        <div className={styles.form_links}>
          <Link to="/login">Ya tengo cuenta</Link>
          <Link to="/register">Crear cuenta</Link>
        </div>
      </form>
    </div>
  );
}

export default NewPass;
