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
import { getUserRemote } from "../../../utils";
interface Product {
  id: string;
  name: string;
  image: any;
  punctuation: number;
  price: number;
  condition?: string;
  user?: string;
  enable?: boolean;
  stock: number;
}

interface Favorites {
  favoritos: object[];
}

interface Carrito {
  cartProducts: object[];
}

interface State {
  favoritos: Favorites;
  carrito: Carrito;
}

function CardProduct(props: Product) {
  const [isFav, setIsFav] = useState(false);
  const [inCart, setInCart] = useState(false);
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();
  const { favoritos } = useSelector((state: State) => state.favoritos);
  const { cartProducts } = useSelector((state: State) => state.carrito);

  const { token } = getToken();

  const handleClick = () => {
    dispatch(clearProducts());
    navigate(`/detail/${props.id}`);
    window.scrollTo(0, 0);
  };

  const addToCarrito = async (event: any) => {
    event.stopPropagation();
    const { id } = await getUserRemote();
    const prod = {
      productsId: props.id,
      token,
      cantidad: 1,
    };
    if (id !== props.user) {
      if (inCart) {
        try {
          await urlAxios.delete(`/${token}/shoppingCart/${props.id}`);
          setInCart(false);
          dispatch(getCartProducts());
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Eliminado de Carrito",
            showConfirmButton: false,
            timer: 1000,
          });
        } catch (error: any) {
          console.log(error.response.data.error);
        }
      } else {
        try {
          await urlAxios.post("/user/shoppingCart", prod);
          setInCart(true);
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
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Debes estar logeado",
            showConfirmButton: true,
          });
        }
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "No puedes agregar tus productos",
        showConfirmButton: false,
        timer: 1000,
      });
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
        dispatch(getFavorites());
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
        dispatch(getFavorites());
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Añadido a Favorito",
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (error: any) {
        console.log(error.response.data.error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Debes estar logeado",
          showConfirmButton: true,
        });
      }
    }
  };

  let shortName: string = props.name;

  if (shortName.length > 50) {
    shortName = props.name.slice(0, 40) + "...";
  }

  console.log(props.enable, props.stock);

  useEffect(() => {
    const finded = favoritos.find((fav: any) => fav._id === props.id);
    if (finded) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [favoritos, props.id, dispatch]);

  useEffect(() => {
    const finded = cartProducts.find((cart: any) => cart._id === props.id);
    if (finded) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartProducts, props.id, dispatch]);

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.card_image}>
        {props?.image[0] && (
          <img src={props?.image[0]?.url} alt={props.name.slice(0, 10)} />
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
          {inCart ? (
            <IoCartSharp
              className={styles.icon_cart_act}
              onClick={addToCarrito}
            />
          ) : (
            props.enable &&
            props.stock && (
              <IoCartSharp
                className={styles.icon_cart}
                onClick={addToCarrito}
              />
            )
          )}
        </div>
      </div>
      <div className={styles.card_info}>
        <div className={styles.info}>
          <p className={styles.card_price}>${props.price}</p>
          {props.enable === false || props?.stock <= 0 ? (
            <p className={styles.noDisponible}>No disponible</p>
          ) : (
            <p
              className={props.condition === "Nuevo" ? styles.new : styles.used}
            >
              {props.condition}
            </p>
          )}
        </div>
        <p>{shortName}</p>
        <Rating punctuation={props.punctuation} />
      </div>
    </div>
  );
}

export default CardProduct;
