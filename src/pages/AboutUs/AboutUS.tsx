import { useNavigate } from "react-router"
import styles from "./AboutUs.module.scss"
export default function (){
    const navigate=useNavigate()
    return (
    <div>
        <button onClick={()=>navigate("/")} className={styles.button}>Volver al Home</button>
        <h1 className={styles.title}>SOBRE NOSOTROS</h1>
    </div>
    )
}