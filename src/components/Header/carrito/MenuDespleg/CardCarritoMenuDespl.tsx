import styles from "./CardCarritoMenuDespl.module.scss"

export default function(props:any){
    const p=props.product
    const title = p.title.slice(0,5)
    
    return (
        <div>

          {props?  <div className={styles.card}>
                <img src={p.image[0].url} alt={p.image} className={styles.img}/>
                <p className={styles.title}>{title}...</p>
                <p> ${p.price}</p>
                {/* <button className={styles.button}>+</button>
                <button className={styles.button}>-</button> */}
            </div> : null}
        </div>
    )
}