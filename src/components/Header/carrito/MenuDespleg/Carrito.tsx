import styles from "./Carrito.module.scss";
import { useSelector } from "react-redux";
import {CardCarritoMenuDespl} from "../../../index"
import { useNavigate } from "react-router-dom";

export default function Carrito() {

  const navigate=useNavigate()
  const {cartProducts} =useSelector((state:any)=>state.carrito)
 
  const prueba = cartProducts.slice(0,2)
  
  return (
    <div>
      <div className={styles.contenedor}>
        <div className={styles.product}>
      { prueba ? prueba.map((e:any)=><CardCarritoMenuDespl key={e._id}product={e}/>) : <p className={styles.hola}>No hay nada aquí!</p>

      }
        </div>
        <button className={styles.buttonCarrito} onClick={()=>navigate("/carrito")}>ver todo</button>
      </div>
    </div>
  );
}
