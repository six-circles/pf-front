import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardProduct.module.scss";
import { Rating } from "../..";
import { useDispatch } from "react-redux";
import { clearProducts } from "../../../redux/actions/productActions.";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

interface Product {
  id: string;
  name: string;
  image: string;
  punctuation: number;
  price: number;
}

function CardProduct(props: Product) {
  const [showIcons, setShowIcons] = useState(false);
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  const handleClick = () => {
    dispatch(clearProducts());
    navigate(`/detail/${props.id}`);
    window.scrollTo(0, 0);
  };

  const handleMouseEnter = () => {
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setShowIcons(false);
  };

  let shortName: string = props.name;

  if (shortName.length > 50) {
    shortName = props.name.slice(0, 40) + "...";
  }

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.card_image}>
        <img src={props.image[0]} alt={props.name.slice(0, 10)} />
        {showIcons && (
          <div className={styles.card_icons}>
            <AiOutlineHeart className={styles.icon} />
            <AiOutlineShoppingCart className={styles.icon} />
          </div>
        )}
      </div>
      <div className={styles.card_info}>
        <p>{shortName}</p>
        <Rating punctuation={props.punctuation} />
        <p className={styles.card_price}>${props.price}</p>
      </div>
    </div>
  );
}

export default CardProduct;
