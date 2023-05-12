import { Rating } from "../..";
import styles from "./Details.module.scss";

function Details() {
  return (
    <div className={styles.details}>
      <div className={styles.details_title}>
        <h2>Nombre</h2>
        <div className={styles.details_rating}>
          <Rating punctuation={5} />
          <p>(Reviews)</p>
        </div>
      </div>
      <div>
        <h3>Precio</h3>
      </div>
      <div>
        <h3>Caracteristicas</h3>
        <p>Color</p>
        <p>Capacidad</p>
        <p>Tamaño</p>
      </div>
      <div>
        <button>Comprar</button>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default Details;
