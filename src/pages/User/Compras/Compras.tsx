
import { useEffect, useState } from "react";
// import {getToken} from "../../../utils";
import CardCompras from "../../../components/User/Compras/CardCompras";
import styles from "./Compras.module.scss"

import { urlAxios } from "../../../utils";
//cambiar la ruta por la de get comprabyuser --> reutilizar este comp para more products
// interface State {
//   products: Product;
// }
// interface Product {
//   products: object[];
// }
export default function (){
  const [compras,setcompras]=useState([])

  const getProducts=async()=>{
    const {data}= await urlAxios("/product")
    setcompras(data.products)
  }

  useEffect(  ()=>{
      getProducts()
      
    },[])
    
    
        
   
    return(
    <div>
        <h1 className={styles.title}>MIS COMPRAS</h1>
        <div className={styles.cards}>
          {
          compras?.map((item: any) => (
              <CardCompras
                key={item._id}
                id={item._id}
                name={item.title}
                image={item.image}
                price={item.price}
                punctuation={item.punctuation}
              />
            ))
          }
        </div>
    </div>
    )
}