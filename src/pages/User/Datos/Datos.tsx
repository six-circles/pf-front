import styles from "./Datos.module.scss"
import { validateField, firstValidateField } from "./validate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlAxios } from "../../../utils";
import Swal from "sweetalert2";

interface Credentials {
    name: string,
    email: string,
    phone: string,
    birthday: string,
    password: string,
    repeatPassword: string,
}

export default function () {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState<Credentials>({
        name: "",
        email: "",
        phone: "",
        birthday: "",
        password: "",
        repeatPassword: "",
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
                setMessage("Usuario o contraseña incorrecta");
            }
        } else {
            setErrors(firstValidateField({ ...credentials }, errors));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Mis datos</h1>
            <div className={styles.group}>
                <p><b>Datos de cuenta</b></p>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Correo</label>
                    <input autoComplete="email" className={styles.campo} type="text" value={"hola@mail.com"} name="email" onChange={handleInputChange} />
                </div>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Contraseña</label>
                    <input autoComplete="new-password" className={styles.campo} type="text" name="password" value={""} onChange={handleInputChange} />
                    <label htmlFor="" className={styles.campo}>Repetir contraseña</label><br />
                    <input autoComplete="new-password" className={styles.campo} type="text" name="repeatPassword" value={""} onChange={handleInputChange} />
                </div>
            </div>
            <div className={styles.group}>
                <p><b>Datos personales</b></p>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Nombre</label>
                    <input type="text" autoComplete="name" name="name" className={styles.campo} value={"NombreHola"} onChange={handleInputChange} />
                    {/* <div className={styles.link}>editar</div> */}
                </div>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Teléfono</label>
                    <input type="tel" autoComplete="tel" name="phone" className={styles.campo} value={"123456789"} onChange={handleInputChange} />
                </div>
                <div className={styles.dato}>
                    <label className={styles.campo} htmlFor="">Fecha de nacimiento</label>
                    <input type="date" autoComplete="bday" name="birthday" className={styles.campo} value={"2023-01-01"} onChange={handleInputChange} />
                </div>
            </div>
            <div className={styles.group}>
                <p><b>Direcciones</b></p>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Dirección 1</label>
                    <input autoComplete="address-line1" className={styles.campo} type="text" name="address-1" value={"Calle los naranjos 1122"} onChange={handleInputChange} />
                </div>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Dirección 2</label>
                    <input autoComplete="address-line1" className={styles.campo} type="text" name="address-2" value={"Calle los manzanos 1245"} onChange={handleInputChange} />
                </div>
            </div>
            <div className={styles.group}>
                <p><b>Tarjetas</b></p>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>BBVA crédito</label>
                    <input autoComplete="address-line1" className={styles.campo} type="text" name="address-1" value={"2323-3454-6786-5892"} onChange={handleInputChange} />
                </div>
            </div>
            <button className={styles.link} type="submit">Actualizar datos</button>
        </form >
    )
}