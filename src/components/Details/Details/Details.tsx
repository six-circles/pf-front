import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "../..";
import styles from "./Details.module.scss";
import { DetailProd, getToken, urlAxios } from "../../../utils";
import { getCartProducts } from "../../../redux/actions/carritoActions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getUserRemote } from "../../../utils";
interface DetailsProps {
  detail: DetailProd;
}

function Details({ detail }: DetailsProps) {
  const { cartProducts } = useSelector((state: any) => state.carrito);
  const [isAvaible, setIsAvaible] = useState(true);
  const [admin, setAdmin] = useState(false);
  const { token } = getToken();
  const productInit = {
    cantidad: 0,
    characteristics: {},
  };

  const [cart, setCart] = useState(productInit);
  const dispatch: Function = useDispatch();
  const obj = { token, productsId: detail._id, cantidad: cart.cantidad || 1 };
  const navigate = useNavigate();
  // const prodChars =
  //   detail.moreCharacteristics && Object.entries(detail.moreCharacteristics);

  const handleSetCart = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCart({ ...cart, [name]: value });
  };

  const isAdmin = async () => {
    const { data } = await urlAxios(`/user/${token}`);

    setAdmin(data.admin);
  };

  const handleDelete = async () => {
    try {
      await urlAxios.delete(`/product/${detail._id}`);
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "Producto Eliminado",
        timer: 1500,
        position: "center",
      });
    } catch (error: any) {
      console.error(error.response.data);
    }
  };
  const auth = async () => {
    const sellerId = detail.user._id;
    const { id } = await getUserRemote();
    const userId = id;
    return { sellerId, userId };
  };

  const user = detail.user;
  const email = user?.email;
  const name = user?.name;
  const encriptadoEmail = window.btoa(email);

  const submitAddCart = async (event: any) => {
    event.preventDefault();

    const cartProduct = cartProducts.find(
      (product: any) => product._id === detail._id
    );

    if (cartProduct) {
      if (cartProduct.cantidadCarrito + Number(obj.cantidad) > detail.stock) {
        Swal.fire({
          title: "No hay mas stock de este producto",
          icon: "error",
          timer: 2000,
          position: "center",
        });
        return;
      }
    }

    try {
      const { sellerId, userId } = await auth();
      if (sellerId !== userId) {
        await urlAxios.post("user/shoppingCart", obj);
        dispatch(getCartProducts());
        setCart(productInit);
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Añadido a Carrito",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "No puedes agregar tus productos",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } catch (err: any) {
      console.log(err.response.data);
    }
  };

  const handleBuy = async () => {
    const { sellerId, userId } = await auth();

    const cartProduct = cartProducts.find(
      (product: any) => product._id === detail._id
    );

    if (cartProduct) {
      if (cartProduct.cantidadCarrito > 0) {
        navigate("/carrito");
      }
    }
    {
      try {
        if (sellerId !== userId) {
          await urlAxios.post("user/shoppingCart", obj);

          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Añadido a Carrito",
            showConfirmButton: false,
            timer: 1000,
          });

          navigate("/carrito");
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "No puedes agregar tus productos",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      } catch (err: any) {
        console.log(err.response);
      }
    }
  };

  const avaible = () => {
    if (detail.stock > 0) setIsAvaible(true);
    else setIsAvaible(false);
  };

  useEffect(() => {
    isAdmin();
    avaible();
  }, [detail]);

  return (
    <div className={styles.details}>
      <div className={styles.details_title}>
        <h2>{detail.title}</h2>
        <div className={styles.details_state}>
          <p
            className={detail.condition === "Nuevo" ? styles.new : styles.used}
          >
            {detail.condition}
          </p>
          {isAvaible ? (
            <p>{detail.stock} en Stock</p>
          ) : (
            <p className={styles.noAvaible}>No disponible</p>
          )}
        </div>
        <div className={styles.details_rating}>
          {(detail.punctuations || detail.punctuations === 0) && (
            <Rating punctuation={detail.punctuations} />
          )}
          <a className={styles.lighten} href="#reviews">
            ({detail.comments?.length})
          </a>
        </div>
        {detail.user?.name && (
          <p
            className={styles.lighten}
            onClick={() => navigate(`/detail/${name}/${encriptadoEmail}`)}
          >
            {detail.user.name}
          </p>
        )}
      </div>
      <div className={styles.price}>
        <h3>${detail.price}</h3>
      </div>
      {/* <div className={styles.caracteristics}>
        <h3>Caracteristicas</h3>
        {prodChars &&
          prodChars.map((prop: any) => (
            <div key={prop[0]}>
              <p>{prop[0]}</p>
              <div style={{ display: "flex", gap: "1rem" }}>
                {prop[1].map((char: any) => (
                  <div
                    key={char}
                    className={styles.char}
                    style={{ backgroundColor: `${char}` }}
                  >
                    <input
                      name={prop[0]}
                      type="radio"
                      style={{ backgroundColor: `${char}` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div> */}
      <div className={styles.description}>
        <h3>Descripcion</h3>
        <p>{detail.description}</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles.cant}>
          <input
            type="number"
            name="cantidad"
            placeholder={`${isAvaible ? `1 - ${detail.stock}` : "N/A"}`}
            value={!cart.cantidad ? "" : cart.cantidad}
            min={1}
            max={detail.stock}
            onChange={handleSetCart}
            disabled={!isAvaible}
            className={!isAvaible ? styles.disable : ""}
          />
          <button
            onClick={submitAddCart}
            disabled={!isAvaible}
            className={!isAvaible ? styles.disable : ""}
          >
            Agregar al carrito
          </button>
        </div>
        <button
          className={`${styles.button_buy} ${!isAvaible ? styles.disable : ""}`}
          name="buy"
          onClick={handleBuy}
          disabled={!isAvaible}
        >
          Comprar
        </button>
        {admin && (
          <button className={styles.button_disable} onClick={handleDelete}>
            Eliminar producto
          </button>
        )}
      </div>
    </div>
  );
}

export default Details;
