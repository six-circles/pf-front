import { useSelector } from "react-redux"
import CardProduct from "../../Home/Products/CardProduct";
import styles from "./MoreProducts.module.scss"
//mapear los 4/5 primeros productos del vendedor de la publicación y renderizarlos. (esto llevarlo a pages-Detail y renderizarlo alla)
//ver de recibir SOLO los productos del vendedor de la publi
interface Products {
    products: object[];
  }
  
  interface State {
    products: Products;
  }
 
export default function MoreProduct(){
    const prod =useSelector((s:State)=>s.products)
    const {products} = prod
    
    const moreProd=products.slice(0,2)
    
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