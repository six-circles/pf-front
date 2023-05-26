// import { CardCarritoMenuDespl } from "../../components"
import { Resumen } from "../../../components/index"
import { useSelector } from "react-redux"
import styles from "./CarritoLight.module.scss"
import { urlAxios } from "../../../utils"
import { getToken } from "../../../utils/index";
import { Link } from "react-router-dom";

import { getCartProducts } from "../../../redux/actions/carritoActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function ({ cartProducts }: any) {


  return (
    <div className={styles.container}>
        <div className={styles.contCard}>
        {console.log(cartProducts)}
        {cartProducts.slice(0,3).map((p: any) =><OneProduct key={p._id} product={p} />)}
        {cartProducts.length>3?<div style={{textAlign:"center",background:"#fff",lineHeight: "9px",paddingBottom:"10px"}}><p>.<br/>.<br/>.</p></div>:""}
        <Link to="/carrito"><div className={styles.option2}>Ver todo mi carrito</div></Link>
        </div>
    </div>
  )
}


function OneProduct({ product }: any) {

  const dispatch: Function = useDispatch();
  const user = getToken();
  const token = user.token;

  const deleteProduct = async () => {
    try {
      Swal.fire({
        title: '¿Desea borrar este producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await urlAxios.delete(`${token}/shoppingCart/${product._id}`);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto eliminado",
            showConfirmButton: false,
            timer: 2000,
          });
          dispatch(getCartProducts());
        }
      })

    } catch (error: any) {
      console.log(error.message);
    }
  };


  return (
      <div className={styles.contCard2}>
          <div className={styles.card}>
          <Link to={`/detail/${product._id}`} className={styles.img}><img src={product.image} alt={product.title.slice(0,20)} className={styles.img} /></Link> 
            <div className={styles.info}>
              <p className={styles.title}>{product.title}</p>
              <p className={styles.precio}>${product.price}</p>
              <p>Cantidad: {product.cantidadCarrito}</p>
              <p className={styles.buttonEliminar} onClick={deleteProduct}>Eliminar</p>
            </div>
          </div>
          <hr />
      </div>
  )
}