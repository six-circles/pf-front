import styles from "./CardCompras.module.scss";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}
export default function (props: Product) {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={props.image[0]} alt={props.name.slice(0, 10)} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{props.name}</h3>
        <p className={styles.precio}>${props.price}</p>
      </div>

      <p className={styles.entrega}>Entregado el 08/02/2023</p>
    </div>
  );
}
