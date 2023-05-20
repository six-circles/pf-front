import styles from "./CardCarritoMenuDespl.module.scss"

export default function(props:any){

    const title = props.prueba.title.slice(0,5)
    
    return (
        <div>

          {props?  <div className={styles.card}>
                <img src={props.prueba.image[0]} alt={props.prueba.image} className={styles.img}/>
                <p className={styles.title}>{title}</p>
                <p> ${props.prueba.price}</p>
                <button className={styles.button}>+</button>
                <button className={styles.button}>-</button>
            </div> : null}
        </div>
    )
}