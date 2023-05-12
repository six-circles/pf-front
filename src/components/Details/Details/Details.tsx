// import { useParams } from "react-router-dom";

import { Rating } from "../..";
import styles from "./Details.module.scss";

function Details() {
  // const { id } = useParams();

  return (
    <div className={styles.details}>
      <div className={styles.details_title}>
        <h2>Nombre</h2>
        <div className={styles.details_rating}>
          <Rating punctuation={5} />
          <p>(Reviews)</p>
        </div>
      </div>
      <div className={styles.price}>
        <h3>Precio</h3>
      </div>
      <div className={styles.caracteristics}>
        <h3>Caracteristicas</h3>
        <p>Color</p>
        <p>Capacidad</p>
        <p>Tamaño</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles.cant}>
          <input type="number" placeholder="0" />
          <button>Agregar al carrito</button>
        </div>
        <button className={styles.button_buy}>Comprar</button>
      </div>
    </div>
  );
}

export default Details;
