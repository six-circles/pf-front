import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardProduct.module.scss";
import { Rating } from "../..";
import { useDispatch } from "react-redux";
import { clearProducts } from "../../../redux/actions/productActions.";
import { AiFillHeart } from "react-icons/ai";
import { IoCartSharp } from "react-icons/io5";
import { getToken, urlAxios } from "../../../utils";
import { getCartProducts } from "../../../redux/actions/carritoActions";

interface Product {
  id: string;
  name: string;
  image: string;
  punctuation: number;
  price: number;
  condition?: string;
  user?: string;
}

function CardProduct(props: Product) {
  const [showIcons, setShowIcons] = useState(false);
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  const { token } = getToken();

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

  const addToCarrito = async (event: any) => {
    event.stopPropagation();

    const prod = {
      productsId: props.id,
      token,
      cantidad: 1,
    };
    try {
      await urlAxios.post("/user/shoppingCart", prod);
      dispatch(getCartProducts());
    } catch (error: any) {
      console.log(error.response.data.error);
    }
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
        {props?.image && (
          <img src={props?.image[0]} alt={props.name.slice(0, 10)} />
        )}
        {showIcons && (
          <div className={styles.card_icons}>
            <AiFillHeart className={styles.icon_heart} />
            <IoCartSharp className={styles.icon_cart} onClick={addToCarrito} />
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

export default CardProduct;
