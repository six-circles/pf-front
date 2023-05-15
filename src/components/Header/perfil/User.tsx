import styles from "./User.module.scss"

export default function User(){
    
  

    
    return(
    <div>
       <div className={styles.contenedor}>
        <a href="/user" className={styles.links}> Crear producto</a>
        <a href="/login" className={styles.links}>Salir</a>
       </div>
    </div>)
}