import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardVentas.module.scss";

import { Rating } from "../..";
import { useDispatch } from "react-redux";
import { clearProducts } from "../../../redux/actions/productActions.";
import { AiFillEdit } from "react-icons/ai";
import { GoEyeClosed } from "react-icons/go";

interface Product {
  id: string;
  name: string;
  image: string;
  punctuation: number;
  price: number;
  condition?: string;
}

function CardVentas(props: Product) {
  const [showIcons, setShowIcons] = useState(false);
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  const handleClick = () => {
    dispatch(clearProducts());
    navigate(`/detail/${props.id}`);
    window.scrollTo(0, 0);
  };

  const handleEdit = (event: any) => {
    event.stopPropagation();
    navigate({
      pathname: "create_product",
      search: `?product=${props.id}`,
    });
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
            <AiFillEdit className={styles.icon_edit} onClick={handleEdit} />
            <GoEyeClosed className={styles.icon_del} />
          </div>
        )}
      </div>
      <div className={styles.card_info}>
        <div className={styles.info}>
          <p className={styles.card_price}>${props.price}</p>
          <p className={props.condition === "Nuevo" ? styles.new : styles.used}>
            {props.condition}
          </p>
        </div>
        <p>{shortName}</p>
        <Rating punctuation={props.punctuation} />
      </div>
    </div>
  );
}

export default CardVentas;
