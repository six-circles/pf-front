import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Rating } from "../..";
import styles from "./Details.module.scss";
import { getProductDetail } from "../../../redux/actions/productActions.";

interface Detail {
  questions: [];
  _id: "645d362216627d3f23a8f67c";
  title: "Camioneta";
  price: 1;
  image: "https://unareceta.com/wp-content/uploads/2017/03/huevos-revueltos-americanos.jpg";
  description: "no sirve";
  stock: 2;
  comments: [];
  user: "645bffa7d17623d616e202c9";
  createdAt: "2023-05-11T18:38:26.762Z";
  updatedAt: "2023-05-11T21:00:33.094Z";
  __v: 0;
  punctuations: 2;
}

interface Products {
  detail: Detail;
}

interface State {
  products: Products;
}

function Details() {
  const { id } = useParams<{ id: string }>();
  const dispatch: Function = useDispatch();
  const { detail } = useSelector((state: State) => state.products);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <div className={styles.details}>
      <div className={styles.details_title}>
        <h2>{detail.title}</h2>
        <div className={styles.details_rating}>
          <Rating punctuation={detail.punctuations} />
          <p>({detail.comments.length})</p>
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
