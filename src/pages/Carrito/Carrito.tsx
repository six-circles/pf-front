import { CardCarritoMenuDespl } from "../../components/index"

import { useSelector } from "react-redux"

export default function (){
    
    const {products} = useSelector((state:any)=>state.carrito)
    
    console.log("micarrito",products)

    return (
    <div>
        {
            products?.map((e:any)=><CardCarritoMenuDespl key={e._id}prueba={e}/>)
        }
        {/* <CardCarritoMenuDespl/> */}

    </div>
    )
}