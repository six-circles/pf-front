import Rating from "./Rating";
import styles from "./CardProduct.module.scss";

interface Product {
  key: string;
  name: string;
  image: string;
  punctuation: number;
  price: number;
}

function CardProduct(props: Product) {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.name} />
      <div className={styles.card_info}>
        <p>{props.name}</p>
        {/* <Rating punctuation={props.punctuation} /> */}
        <p>${props.price}</p>
      </div>
    </div>
  );
}

export default CardProduct;
