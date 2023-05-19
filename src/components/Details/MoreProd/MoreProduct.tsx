import { urlAxios } from "../../../utils";
import { useEffect, useState } from "react";
import CardProduct from "../../Home/Products/CardProduct";
import styles from "./MoreProducts.module.scss"
import { useSelector} from "react-redux";
// import { useParams } from "react-router";
 import { DetailProd } from "../../../utils";

interface Products {
  detail: DetailProd;
}

interface State {
  products: Products;
}

export default function MoreProduct(){
  const [moreProducts,setMoreProducts]=useState([])
  const { detail } = useSelector((state: State) => state.products);
 
  const getID =()=>{
    detail 
    const {user} =detail
    const idUser = user?._id
    return idUser 
  }
  
  const getProduct=async()=>{
    const id = getID()
    const {data}= await urlAxios(`/product/moreproducts/${id}`)
    setMoreProducts(data)
  }
  useEffect(() => {
    getProduct();
}, []);
  
  

    
    const moreProd = moreProducts.slice(0,5)
    
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