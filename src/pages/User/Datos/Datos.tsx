import styles from "./Datos.module.scss"

export default function () {
    return (
        <div>
            <h1>Mis datos</h1>
            <div className={styles.group}>
                <p><b>Datos de cuenta</b></p>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Email</label>
                    <input autoComplete="email" className={styles.campo} type="text" value={"hola@mail.com"} />
                </div>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Contraseña</label>
                    <input autoComplete="new-password" className={styles.campo} type="text" name="" value={""} />
                </div>
            </div>
            <div className={styles.group}>
                <p><b>Datos personales</b></p>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Nombre</label>
                    <input type="text" autoComplete="name" name="name" className={styles.campo} value={"NombreHola"} />
                    {/* <div className={styles.link}>editar</div> */}
                </div>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Teléfono</label>
                    <input type="tel" autoComplete="tel" name="phone" className={styles.campo} value={"123456789"} />
                </div>
                <div className={styles.dato}>
                    <label className={styles.campo} htmlFor="">Fecha de nacimiento</label>
                    <input type="date" autoComplete="bday" name="birthday" className={styles.campo} value={"2023-01-01"} />
                </div>
            </div>
            <div className={styles.group}>
                <p><b>Direcciones</b></p>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Dirección 1</label>
                    <input autoComplete="address-line1" className={styles.campo} type="text" name="address-1" value={"Calle los naranjos 1122"} />
                </div>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>Dirección 2</label>
                    <input autoComplete="address-line1" className={styles.campo} type="text" name="address-2" value={"Calle los manzanos 1245"} />
                </div>
            </div>
            <div className={styles.group}>
                <p><b>Tarjetas</b></p>
                <div className={styles.dato}>
                    <label htmlFor="" className={styles.campo}>BBVA crédito</label>
                    <input autoComplete="address-line1" className={styles.campo} type="text" name="address-1" value={"2323-3454-6786-5892"} />
                </div>
            </div>
            <button className={styles.link}>Actualizar datos</button>
        </div >
    )
}