
import { useSelector } from "react-redux"
import styles from "./FavoritosMenuDesplegable.module.scss"
import { getToken } from "../../../utils/index";
import { Link } from "react-router-dom";
import { getFavorites } from "../../../redux/actions/favoritosActions";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
import { useEffect } from "react";

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
//   const user = getToken();
//   const token = user.token;

  useEffect(()=>{
      dispatch(getFavorites());

  },[])



  return (
      <div className={styles.contCard2}>
          <div className={styles.card}>
          <Link to={`/detail/${product._id}`} className={styles.img}><img src={product.image} alt={product.title.slice(0,20)} className={styles.img} /></Link> 
            <div className={styles.info}>
              <p className={styles.title}>{product.title}</p>
              <p className={styles.precio}>${product.price}</p>
            </div>
          </div>
          <hr />
      </div>
  )
}