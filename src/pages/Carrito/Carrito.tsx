import { CardCarritoMenuDespl } from "../../components"

import { useSelector } from "react-redux"

export default function (){
    
    const {cartProducts} = useSelector((state:any)=>state.carrito)
    
    console.log("micarrito", cartProducts)

    return (
    <div>
        hola
        {
             cartProducts?.map((e:any)=><CardCarritoMenuDespl key={e._id}prueba={e}/>)
        }

    </div>
    )
}