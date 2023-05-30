import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./ForgotPass.module.scss";
import { urlAxios } from "../../utils";
import Swal from "sweetalert2";

function NewPass() {
  const [pass, setPass] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await urlAxios.post("/forgot-password", { pass });
      Swal.fire({
        icon: "success",
        title: "Revisa tu Email",
        timer: 2000,
        position: "center",
      });
      setPass("");
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: err.response.data.error,
        timer: 2000,
        position: "center",
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
            type="text"
            id="password"
            placeholder="Ingrese su nueva contraseña"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Recuperar</button>
      </form>
    </div>
  );
}

export default NewPass;
