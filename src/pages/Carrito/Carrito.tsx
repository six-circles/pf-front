<<<<<<< HEAD
import { CardCompras } from "../../components"  //recibe un producto
import { useSelector } from "react-redux"

import { DetailProd } from "../../utils/index";

interface Products {
  detail: DetailProd;
}

interface State {
  products: Products;
}
export default function (){
    const products = useSelector((state:State)=>state.products)
    
    return (
    <div>
        <div>
            {/* <CardCompras/> */}
        </div>
        <div>
            pasarela de pagos
        </div>
        
    </div>
    )
=======
export default function (){
    return <div>carrito</div>
>>>>>>> develop
}