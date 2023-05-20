import styles from "./CarritoPage.module.scss";
import { urlAxios } from "../../utils";
import { getToken } from "../../utils/index";
import { getCartProducts } from "../../redux/actions/carritoActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
export default function (props: any) {
    const dispatch:Function = useDispatch()
    const user = getToken();
    const token = user.token;
    const prod = props.producto;
    const id = props.producto._id
    const navigate= useNavigate()
  const deleteProduct=async()=>{
     try {
        await urlAxios.delete(`${token}/shoppingCart/${id}`)
        alert("producto eliminado")
        dispatch(getCartProducts())
     } catch (error:any) {
        console.log(error.message)
     }
  }
  const details=(id:string)=>{
    navigate(`/detail/${id}`)
    }
  const name = prod.title.slice(0,13)
  const cant = prod.cantidadCarrito
  console.log(cant)
  return (
    <div>
      { 
        prod ? (
        <div className={styles.card}>
          <img src={prod.image[0]} alt={prod.title} className={styles.img} />
          <p className={styles.title}>{name}...</p>
          <p className={styles.precio}>${prod.price}</p>
          {/* <p>{prod.puntuaction}</p> */}
          <div className={styles.cantidad}>
            <label>Cantidad</label>
            <input
                className={styles.input}
                type="number"
                name="cantidad"
                placeholder={cant}
                value={cant}
                min={1}
                max={cant}  
            />
          </div>
          <button onClick={()=>details(id)} className={styles.buttonDetails}>Detalles</button>
          <button className={styles.buttonEliminar} onClick={deleteProduct}>X</button>
        </div>
      ) : (
        <h3>No hay productos aún...</h3>
      )}
    </div>
  );
}
