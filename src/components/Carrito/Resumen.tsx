import styles from "./Resumen.module.scss"
export default function({productos}:any){
  
    
   let totalPerProduct=productos.map((p:any)=>p.price*p.cantidadCarrito)
   const total = totalPerProduct.reduce((acc:any,val:any)=>{ return acc + val},0)
   
    return(
        <div>
                <div className={styles.title}>
                    <div className={styles.titleMisPedidos}>
                        <h3 className={styles.columnas}>Mis pedidos</h3>
                    </div>
                    <div className={styles.titleMisPedidos}>
                        <h3 className={styles.columnas}>Precio unitario</h3>
                    </div>
                    <div className={styles.titleMisPedidos}>
                        <h3 className={styles.columnas}>Cantidad</h3>
                    </div>
                    <div className={styles.titleMisPedidos}>
                        <h3 className={styles.columnas}>Subtotal</h3>
                    </div>
                
                </div>
         {
            productos?.map((p:any)=> 
            // {const total=p.price*p.cantidad},
            <div className={styles.contenedor}> 
                <div className={styles.namePedidos} >
                    <p className={styles.name}>{p.title.slice(0,15)}...</p>
                </div> 
                <div className={styles.namePedidos} > 
                    <p className={styles.name}>$ {p.price}</p>
                </div>
                <div className={styles.namePedidos} >
                    <p className={styles.name}>{p.cantidadCarrito}</p>
                </div>
                <div className={styles.namePedidos} >
                    <p className={styles.name}>   $  {p.price*p.cantidadCarrito}</p>
                </div>
            </div>)
         }
         <div className={styles.total}>
            <p>Total</p>
            <p>{total}</p>
         </div>
        </div>
    )
}
