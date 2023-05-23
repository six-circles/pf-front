import styles from "./CarritoPage.module.scss";
import { urlAxios } from "../../utils";
import { getToken } from "../../utils/index";
import { getCartProducts } from "../../redux/actions/carritoActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import {useState} from "react"

export default function (props: any) {
  const dispatch: Function = useDispatch();
  const user = getToken();
  const token = user.token;
  const prod = props.producto;
  const id = props.producto._id;
  const navigate = useNavigate();
  const deleteProduct = async () => {
    try {
      await urlAxios.delete(`${token}/shoppingCart/${id}`);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto eliminado",
        showConfirmButton: false,
        timer: 2000,
      });
      dispatch(getCartProducts());
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const details = (id: string) => {
    navigate(`/detail/${id}`);
  };
  const name = prod.title;
  const cant = prod.cantidadCarrito;
  const image = prod.image[0]

  const[newCarrito,setNewCarrito]=useState(0)
  const addCarrito=()=>{
   setNewCarrito(newCarrito+1)
  }
  const product={
    productsId:id,
    token,
    cantidad: newCarrito,
  }
  
  const SendCarrito=async()=>{
    try {
      
      await urlAxios.post("/user/shoppingCart",product)
      dispatch(getCartProducts())
      setNewCarrito(0)
      Swal.fire({
        position: "center",
        icon:"success",
        title: "agregado con éxito",
        showConfirmButton: false,
        timer: 1000,
      })
      
    } catch (error:any) {
      console.log(error)
      Swal.fire({
        position: "center",
        icon:"error",
        title: "No se pudo añadir",
        showConfirmButton: false,
        timer: 2000,
      })
    }
    
  }
  return (
    <div>
      {prod ? (
        <div className={styles.card}>
         { <img src={image} alt={prod.title} className={styles.img} />}
          <p className={styles.title}>{name}</p>
          <p className={styles.precio}>${prod.price}</p>
          {/* <p>{prod.puntuaction}</p> */}

          <div className={styles.cantidad}>
            <label>Cantidad</label>
            <input
              className={styles.input}
              // type="number"
              // name="cantidad"
              placeholder={cant}
              // value="1"
              // min={cant}
              // max={cant}
            />
          </div>
          <button onClick={() => details(id)} className={styles.buttonDetails}>
            Detalles
          </button>
          <button className={styles.buttonEliminar} onClick={deleteProduct}>
            X
          </button>
        </div>
      ) : (
        <h3>No hay productos aún...</h3>
      )}
      <button> - </button>
      <button onClick={addCarrito}> + </button>
      <button onClick={SendCarrito}> actualizar </button>
    </div>
  );
}
