import { useState } from "react";
import { useDispatch } from "react-redux";
import { Rating } from "../..";
import styles from "./Details.module.scss";
import { DetailProd, getToken, urlAxios } from "../../../utils";
import { getCartProducts } from "../../../redux/actions/carritoActions";
import Swal from "sweetalert2";

interface DetailsProps {
  detail: DetailProd;
}

function Details({ detail }: DetailsProps) {
  const { token } = getToken();
  const productInit = {
    cantidad: 0,
    characteristics: {},
  };
  const [cart, setCart] = useState(productInit);
  const dispatch: Function = useDispatch();
  const config = { token, productsId: detail._id, cantidad: cart.cantidad };

  const prodChars =
    detail.moreCharacteristics && Object.entries(detail.moreCharacteristics);

  const handleSetCart = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCart({ ...cart, [name]: value });
  };

  const submitAddCart = async (event: any) => {
    event.preventDefault();
    console.log(cart);

    if (cart.cantidad > 0) {
      try {
        await urlAxios.post("user/shoppingCart", config);

        dispatch(getCartProducts());
        setCart(productInit);
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Añadido a Carrito",
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (err: any) {
        console.log(err.response);
      }
    }
  };

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
          <p>{detail.stock} en Stock</p>
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
          <p className={styles.lighten}>{detail.user.name}</p>
        )}
      </div>
      <div className={styles.price}>
        <h3>${detail.price}</h3>
      </div>
      <div className={styles.caracteristics}>
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
      </div>
      <div className={styles.description}>
        <h3>Descripcion</h3>
        <p>{detail.description}</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles.cant}>
          <input
            type="number"
            name="cantidad"
            placeholder={`1 - ${detail.stock}`}
            value={!cart.cantidad ? "" : cart.cantidad}
            min={1}
            max={detail.stock}
            onChange={handleSetCart}
          />
          <button onClick={submitAddCart}>Agregar al carrito</button>
        </div>
        <button className={styles.button_buy}>Comprar</button>
      </div>
    </div>
  );
}

export default Details;
