// import { CardCarritoMenuDespl } from "../../components"
import {CarritoPage} from "../../components/index"
import { useSelector } from "react-redux"
import styles from "./Carrito.module.scss"
export default function (){
    const {cartProducts} = useSelector((state:any)=>state.carrito)
    
//    const product=cartProducts[0]
    
    return (
    <div>
       
        <div className={styles.card}>
        {cartProducts?.map((p:any)=> <CarritoPage key={p._id}producto={p}/>)}
        </div>
    </div>
    )
}
