import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./ForgotPass.module.scss";
import { urlAxios } from "../../utils";
import Swal from "sweetalert2";

function ForgotPass() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await urlAxios.post("/forgot-password", { email });
      setIsLoading(false);
      Swal.fire({
        icon: "success",
        title: "Revisa tu Email",
        timer: 2000,
        position: "center",
      });
      setEmail("");
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
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Ingrese el Email con el que se registro"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={isLoading ? styles.wait : ""}
        >
          Enviar Email
        </button>
        <div className={styles.form_links}>
          <Link to="/login">Ya tengo cuenta</Link>
          <Link to="/register">Crear cuenta</Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPass;
