import { useNavigate } from "react-router";
import styles from "./CreateUser.module.scss";
import React, { useState } from "react";
// import axios from "axios"
import { urlAxios } from "../../utils";
import validation from "./validate";
import Swal from "sweetalert2";

export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/login");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState({
    password: "",
    email: "",
    birthday: "",
  });

  const newUser: object = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    birthday: form.birthday,
    password: form.password,
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    const property: string = e.target.name;
    const value: string = e.target.value;
    setForm({ ...form, [property]: value });
    setError({ ...validation({ ...form, [property]: value }) });
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await urlAxios.post("/user", newUser);
      setIsLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario creado con exito",
        showConfirmButton: false,
        timer: 2000,
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        birthday: "",
        password: "",
        repeatPassword: "",
      });
      navigate("/login");
    } catch (error: any) {
      if (error.response.data.error.includes("duplicate key")) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Email ya registrado",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: error.response.data.error,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedor}>
        <button className={styles.buttonAtras} onClick={handleNavigate}>
          Atrás
        </button>
        <h2 className={styles.title}>Registrate</h2>
        <form className={styles.contForm} onSubmit={submit}>
          <div className={styles.contForm}>
            <div className={styles.form}>
              <label htmlFor="Usuario">Usuario</label>
              <input
                type="text"
                name="name"
                className={styles.input}
                value={form.name}
                onChange={handleChange}
              />

              <label htmlFor="Contraseña" className={styles.name}>
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                className={styles.input}
                value={form.password}
                onChange={handleChange}
              />
              <p className={styles.errorPasw}>{error.password}</p>
              <label htmlFor="Repita contraseña">Repita contraseña</label>
              <input
                type="password"
                name="repeatPassword"
                value={form.repeatPassword}
                className={styles.input}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form}>
              <label htmlFor="Correo">Correo</label>
              <input
                type="email"
                name="email"
                className={styles.input}
                value={form.email}
                onChange={handleChange}
              />
              <p className={styles.errorEmail}>{error.email}</p>

              <label htmlFor="Telefono">Teléfono</label>
              <input
                type="number"
                name="phone"
                className={styles.input}
                value={form.phone}
                onChange={handleChange}
              />

              <label htmlFor="Fecha de nacimiento">Fecha de nacimiento</label>
              <input
                type="date"
                name="birthday"
                className={styles.input}
                value={form.birthday}
                onChange={handleChange}
              />
              <p className={styles.errorBirth}>{error.birthday}</p>
            </div>
          </div>
          {error.password.length === 0 &&
          error.email.length === 0 &&
          error.birthday.length === 0 ? (
            <button
              className={`${styles.buttonRes} ${isLoading && styles.wait}`}
              disabled={isLoading}
            >
              Registrar
            </button>
          ) : (
            <button className={styles.buttonResDisabl} disabled>
              Registrar
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
