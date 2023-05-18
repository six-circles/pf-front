import { urlAxios } from "../../../utils";
import { useEffect, useState } from "react";
import {getToken} from "../../../utils";
import CardProduct from "../../Home/Products/CardProduct";
import styles from "./MoreProducts.module.scss"


 
export default function MoreProduct(){

  const [moreProducts,setMoreProducts]=useState([])
    
    //conseguir el token del usuario al que ingreso en detail ??
  const getProduct =async ()=>{
      const info = getToken()
      const token = info.token

      const {data} = await urlAxios(`${token}/product`)
      setMoreProducts(data)
      return moreProducts
  }

  useEffect(  ()=>{
      getProduct()  
  },[])
    
    const moreProd=moreProducts.slice(0,2)
    
    return (
    <div className={styles.contenedor}>
      <h1 className={styles.title}>Más productos del vendedor</h1>
      <div className={styles.card}>
        {moreProd.map((item: any) => (
        <CardProduct
          key={item._id}
          id={item._id}
          name={item.title}
          image={item.image}
          punctuation={item.punctuations}
          price={item.price}
        />
      ))}
      </div>
    </div>
    )}