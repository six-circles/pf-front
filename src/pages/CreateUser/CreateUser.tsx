import styles from "./CreateUser.module.scss"

export default function (){
    return( 
    <div className={styles.contenedor}>
        <div className={styles.contenedor}>
            <button className={styles.buttonAtras}>Atrás</button>
            <h2 className={styles.title}>Registrate</h2>
            <form className={styles.contForm}>
                <div className={styles.contForm}>
                    <div className={styles.form}>
                        <label htmlFor="Usuario">Usuario</label>
                        <input type="text" name="usuario" className={styles.input}/>

                        <label htmlFor="Contraseña" className={styles.name}>Contraseña</label>
                        <input type="password" name="contraseña" className={styles.input}/>

                        <label htmlFor="Repita contraseña">Repita contraseña</label>
                        <input type="password" name="repita contraseña" className={styles.input}/>
                    </div>
                    <div className={styles.form}>
                        <label htmlFor="Correo">Correo</label>
                        <input type="email" name="correo" className={styles.input}/>

                        <label htmlFor="Telefono">Telefono</label>
                        <input type="number" name="telefono" className={styles.input}/>

                        <label htmlFor="Fecha de nacimiento">Fecha de nacimiento</label>
                        <input type="date" name="fecha de nacimiento" className={styles.input}/>
                    </div>
                </div>
                <button className={styles.buttonRes}>Registrar</button>
            </form>
        </div>
    </div>
    )
}