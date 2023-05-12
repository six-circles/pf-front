import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
import styles from "./CardProduct.module.scss";

interface Product {
  id: string;
  name: string;
  image: string;
  punctuation: number;
  price: number;
}

function CardProduct(props: Product) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`detail/${props.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={props.image} alt={props.name} />
      <div className={styles.card_info}>
        <p>{props.name}</p>
        <Rating punctuation={props.punctuation} />
        <p>${props.price}</p>
      </div>
    </div>
  );
}

export default CardProduct;
