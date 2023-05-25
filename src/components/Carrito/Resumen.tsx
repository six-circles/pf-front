import styles from "./Resumen.module.scss"
export default function({productos}:any){
    console.log(productos)
    
    return(
        <div>
         {
            productos?.map((p:any)=> 
            // {const total=p.price*p.cantidad},
            <div className={styles.contenedor}> 
                <div>
                    <h3 className={styles.columnas}>Mis pedidos</h3>
                    <p>{p.title.slice(0,15)}</p>
                </div> 
                <div> 
                    <h3 className={styles.columnas}>Precio unitario</h3>
                    <p>{p.price}</p>
                </div>
                <div>
                    <h3 className={styles.columnas}>Cantidad</h3>
                    <p>{p.cantidadCarrito}</p>
                </div>
                <div>
                    <h3 className={styles.columnas}>Precio total por producto</h3>
                    <p>{p.price*p.cantidadCarrito}</p>
                </div>
            </div>)
         }
        </div>
    )
}
