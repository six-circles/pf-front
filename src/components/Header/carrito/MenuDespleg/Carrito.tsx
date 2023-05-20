import styles from "./Carrito.module.scss";
import { useSelector } from "react-redux";
import {CardCarritoMenuDespl} from "../../../index"
import { useNavigate } from "react-router-dom";
interface Products {
 products: any;
 
}

interface State {
  products: Products;
  
}

export default function Carrito() {

  const navigate=useNavigate()
  const {products} =useSelector((state:State)=>state.products)
 
  const prueba = products.slice(0,2)
  console.log("Carrito",prueba)
  return (
    <div>
      <div className={styles.contenedor}>
        <div className={styles.product}>
      { prueba ? prueba.map((e:any)=><CardCarritoMenuDespl prueba={e}/>) : <p className={styles.hola}>No hay nada aquí!</p>

      }
        </div>
        <button className={styles.buttonCarrito} onClick={()=>navigate("/carrito")}>ver todo</button>
      </div>
    </div>
  );
}
