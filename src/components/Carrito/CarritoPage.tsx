import styles from "./CarritoPage.module.scss"
import { urlAxios } from "../../utils"
import {getToken} from "../../utils/index"
export default function (props:any){
    const user =getToken()
    const token=user.token
    const prod=props.producto
    //"/:token/shoppingCart/:productID"
    // const deleteProduct=async()=>{
    //     await urlAxios(`${token}/shoppingCart/`)
    // }
    return (
        <div>
           { prod? 
           <div className={styles.card}>
                <img src={prod.image[0]} alt={prod.title} className={styles.img}/>
                <p>{prod.price}</p>
                <p className={styles.title}>{prod.title}</p>
                <p>{prod.puntuaction}</p>
                <button className={styles.buttonEliminar} onClick={}>X</button>
            </div>
            : <h3>No hay productos aún...</h3>}
        </div>
    )
}