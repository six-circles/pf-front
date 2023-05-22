import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardProduct.module.scss";
import { Rating } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { clearProducts } from "../../../redux/actions/productActions.";
import { AiFillHeart } from "react-icons/ai";
import { IoCartSharp } from "react-icons/io5";
import { getToken, urlAxios } from "../../../utils";
import { getCartProducts } from "../../../redux/actions/carritoActions";
import { getFavorites } from "../../../redux/actions/favoritosActions";
import Swal from "sweetalert2";

interface Product {
  id: string;
  name: string;
  image: string;
  punctuation: number;
  price: number;
  condition?: string;
  user?: string;
}

interface Favorites {
  favoritos: object[];
}

interface State {
  favoritos: Favorites;
}

function CardProduct(props: Product) {
  const [isFav, setIsFav] = useState(false);
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();
  const { favoritos } = useSelector((state: State) => state.favoritos);

  const { token } = getToken();

  const handleClick = () => {
    dispatch(clearProducts());
    navigate(`/detail/${props.id}`);
    window.scrollTo(0, 0);
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
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Añadido a Carrito",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };

  const addToFavs = async (event: any) => {
    event.stopPropagation();

    const prod = {
      productsId: props.id,
      token,
    };

    if (isFav) {
      try {
        await urlAxios.delete(`/${token}/favorites/${props.id}`);
        setIsFav(false);
        await urlAxios(`/${token}/favorites`);
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Eliminado de Favoritos",
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (error: any) {
        console.log(error.response.data.error);
      }
    } else {
      try {
        await urlAxios.post("/user/favorites", prod);
        setIsFav(true);
        await urlAxios(`/${token}/favorites`);
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Añadido a Favorito",
          showConfirmButton: false,
          timer: 1000,
        });
        dispatch(getFavorites());
      } catch (error: any) {
        console.log(error.response.data.error);
      }
    }
  };

  let shortName: string = props.name;

  if (shortName.length > 50) {
    shortName = props.name.slice(0, 40) + "...";
  }

  useEffect(() => {
    favoritos.forEach((fav: any) => {
      if (fav._id === props.id) {
        setIsFav(true);
      }
    });
  }, [favoritos, props.id]);

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.card_image}>
        {props?.image && (
          <img src={props?.image[0]} alt={props.name.slice(0, 10)} />
        )}
        <div className={styles.card_icons}>
          {isFav ? (
            <AiFillHeart
              className={styles.icon_heart_fav}
              onClick={addToFavs}
            />
          ) : (
            <AiFillHeart className={styles.icon_heart} onClick={addToFavs} />
          )}
          <IoCartSharp className={styles.icon_cart} onClick={addToCarrito} />
        </div>
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
