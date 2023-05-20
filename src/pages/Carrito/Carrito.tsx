// import { CardCarritoMenuDespl } from "../../components/index"

import { useSelector } from "react-redux"

export default function (){
    
    const {products} = useSelector((state:any)=>state.carrito)
    
    console.log("micarrito",products)

    return (
    <div>
        hola
        {/* <CardCarritoMenuDespl/> */}

    </div>
    )
}