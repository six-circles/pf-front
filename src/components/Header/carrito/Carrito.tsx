import styles from "./Carrito.module.scss";

export default function Carrito() {
  return (
    <div>
      <div className={styles.contenedor}>
        <p className={styles.hola}>productos en carrito</p>
        {/* {carrito? carrito.map(p=><div>{p}</div>):null
            } */}
      </div>
    </div>
  );
}
