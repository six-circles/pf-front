import styles from "./Datos.module.scss";
import { validateField } from "./validate";
import { useEffect, useState } from "react";
import {
  urlAxios,
  getUserLocal,
  getTokenAsHeaders,
  getUserRemote,
} from "../../../utils";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface Credentials {
  name: string;
  email: string;
  phone: string;
  birthday: string;
  password: string;
  repeatPassword: string;
  address1: string;
  address2: string;
  card: string;
}

export default function () {
  const navigate = useNavigate();

  let dataDefault = {
    name: "",
    email: "",
    phone: "",
    birthday: "",
    password: "",
    repeatPassword: "",
    address1: "",
    address2: "",
    card: "",
  };
  const [credentials, setCredentials] = useState<Credentials>(dataDefault);
  const [currentUser, setCurrentUser] = useState<Credentials>(dataDefault);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });

    setErrors(validateField({ ...credentials, [name]: value }, errors));
  };

  function compareObjects<T>(obj1: T, obj2: T): Partial<T> {
    const result: Partial<T> = {};
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) {
        result[key] = obj1[key];
      }
    }
    return result;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors("");

    if (Object.values(errors).every((value) => value === "")) {
      let newData = compareObjects(credentials, currentUser);

      try {
        let msg = "Tus datos fueron actualizados";
        await urlAxios.patch(
          `/user/${getUserLocal().token}`,
          newData,
          getTokenAsHeaders()
        );
        setIsEditing(false);

        if (newData.password) {
          window.localStorage.setItem("user", "");
          navigate("/login");
          msg = "Tus datos fueron actualizados, inicia sesión de nuevo";
        }

        Swal.fire({
          position: "center",
          icon: "success",
          title: msg,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sucedió un error, vuelve a intentarlo",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Corrige los errores por favor",
      });
    }
  };

  const isEditingHandle = () => {
    if (isEditing === false) setIsEditing(true);
    else {
      setIsEditing(false);
      setErrors("");
    }
  };

  useEffect(() => {
    getUserRemote().then((data) => {
      setCredentials(data);
      setCurrentUser(data);
    });
  }, [isEditing]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Mis datos</h1>
        <div className={styles.group}>
          <p>
            <b>Datos de cuenta</b>
          </p>
          <div className={styles.dato}>
            <label htmlFor="" className={styles.campo}>
              Correo
            </label>
            <input
              className={styles.campo}
              type="text"
              value={credentials.email}
              readOnly={!isEditing}
              name="email"
              onChange={handleInputChange}
            />
            <p>{errors.email}</p>
          </div>
          <div className={styles.dato}>
            <label htmlFor="" className={styles.campo}>
              Contraseña
            </label>
            <input
              className={styles.campo}
              type="password"
              name="password"
              readOnly={!isEditing}
              value={credentials.password}
              onChange={handleInputChange}
            />
            <p>{errors.password}</p>
          </div>
          <div className={styles.dato}>
            <label htmlFor="" className={styles.campo}>
              Repetir contraseña
            </label>
            <input
              className={styles.campo}
              type="password"
              name="repeatPassword"
              readOnly={!isEditing}
              value={credentials.repeatPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.group}>
          <p>
            <b>Datos personales</b>
          </p>
          <div className={styles.dato}>
            <label htmlFor="" className={styles.campo}>
              Nombre
            </label>
            <input
              type="text"
              autoComplete="name"
              name="name"
              readOnly={!isEditing}
              className={styles.campo}
              value={credentials.name}
              onChange={handleInputChange}
            />
            <p>{errors.name}</p>
          </div>
          <div className={styles.dato}>
            <label htmlFor="" className={styles.campo}>
              Teléfono
            </label>
            <input
              type="tel"
              autoComplete="tel"
              name="phone"
              readOnly={!isEditing}
              className={styles.campo}
              value={credentials.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.dato}>
            <label className={styles.campo} htmlFor="">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              autoComplete="bday"
              name="birthday"
              readOnly={!isEditing}
              className={styles.campo}
              value={credentials.birthday}
              onChange={handleInputChange}
            />
            <p>{errors.birthday}</p>
          </div>
        </div>
        <div className={styles.group}>
          <p>
            <b>Direcciones</b>
          </p>
          <div className={styles.dato}>
            <label htmlFor="" className={styles.campo}>
              Dirección 1
            </label>
            <input
              autoComplete="address-line1"
              className={styles.campo}
              type="text"
              name="address1"
              readOnly={!isEditing}
              value={credentials.address1}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.dato}>
            <label htmlFor="" className={styles.campo}>
              Dirección 2
            </label>
            <input
              autoComplete="address-line1"
              className={styles.campo}
              type="text"
              name="address2"
              readOnly={!isEditing}
              value={credentials.address2}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.group}>
          <p>
            <b>Tarjetas</b>
          </p>
          <div className={styles.dato}>
            <label htmlFor="" className={styles.campo}>
              BBVA crédito
            </label>
            <input
              autoComplete="cc-number"
              className={styles.campo}
              type="text"
              name="card"
              readOnly={!isEditing}
              value={credentials.card}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {isEditing ? (
          <>
            <button className={styles.link} type="submit">
              Actualizar datos
            </button>
            <button className={styles.link2} onClick={() => isEditingHandle()}>
              Cancelar
            </button>
          </>
        ) : (
          <button className={styles.link} onClick={() => isEditingHandle()}>
            Editar
          </button>
        )}
      </form>
    </>
  );
}
