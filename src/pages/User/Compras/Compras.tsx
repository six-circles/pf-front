import { urlAxios } from "../../../utils";
import { useEffect, useState } from "react";
import {getToken} from "../../../utils";
import CardCompras from "../../../components/User/Compras/CardCompras";
//cambiar la ruta por la de get comprabyuser --> reutilizar este comp para more products
export default function (){
    const [moreProducts,setMoreProducts]=useState([])
    
    
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
        
    
    return(
    <div>
        <h1>MIS COMPRAS</h1>
        {
         moreProducts.map((item: any) => (
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
    )
}