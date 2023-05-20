// import { CardCarritoMenuDespl } from "../../components"
import {CarritoPage} from "../../components/index"
import { useSelector } from "react-redux"
import styles from "./Carrito.module.scss"
export default function (){
    //se esta renderizando solo 1 producto para pruebas
    const {cartProducts} = useSelector((state:any)=>state.carrito)
    
   const product=cartProducts[0]
    
    return (
    <div>
       
        {/* {
             cartProducts?.map((e:any)=><CarritoPage key={e._id}producto={e}/>)
        } */}
        <div className={styles.card}>
        {product?<CarritoPage key={product._id}producto={product}/>:null}
        </div>
    </div>
    )
}
