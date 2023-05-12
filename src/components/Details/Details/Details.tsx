import { Rating } from "../..";
import styles from "./Details.module.scss";

interface Detail {
  questions: object[];
  _id: string;
  title: string;
  price: 1;
  image: string;
  description: string;
  stock: number;
  comments: object[];
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  punctuations: number;
}

interface DetailsProps {
  detail: Detail;
}

function Details({ detail }: DetailsProps) {
  return (
    <div className={styles.details}>
      <div className={styles.details_title}>
        <h2>{detail.title}</h2>

        <div className={styles.details_rating}>
          {detail.punctuations && <Rating punctuation={detail.punctuations} />}
          <p>({detail.comments?.length})</p>
        </div>
      </div>
      <div className={styles.price}>
        <h3>${detail.price}</h3>
      </div>
      <div className={styles.caracteristics}>
        <h3>Caracteristicas</h3>
        <p>Color</p>
        <p>Capacidad</p>
        <p>Tamaño</p>
      </div>
      <div className={styles.description}>
        <h3>Descripcion</h3>
        <p>{detail.description}</p>
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
