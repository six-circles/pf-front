import styles from "./CardCompras.module.scss";
import { clearProducts } from "../../../redux/actions/productActions.";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// import  {Rating } from "../../index"
import { useState } from "react";
import CommentList from "../../Details/coments/CommentsList";
interface Product {
  id: any;
  name: string;
  image: any;
  price: number;
  punctuation: number;
}
export default function (props: Product) {
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();
  const id = props.id;
  const handleClick = () => {
    dispatch(clearProducts());
    navigate(`/detail/${id}`);
    window.scrollTo(0, 0);
  };

  const [puntuacion, setPuntuacion] = useState(false);
  const showpuntuacion = () => {
    setPuntuacion(true);
  };

  console.log(props);

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={props.image[0]} alt={props.name.slice(0, 10)} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{props.name}</h3>
        {/* <Rating punctuation={props.punctuation} /> */}
        <button className={styles.rating} onClick={showpuntuacion}>
          Dejale tu comentario al vendedor!
        </button>
      </div>

      <div className={styles.precio}>
        <p className={styles.precio}>Total ${props.price}</p>
      </div>
      <div className={styles.entregado}>
        <p className={styles.entrega}>Entregado el 08/02/2023</p>
        <button onClick={() => handleClick()} className={styles.buttonDetails}>
          Detalles
        </button>
      </div>
      {puntuacion ? (
        <div className={styles.puntuacion}>
          {" "}
          <CommentList
            id={id}
            setPuntuacion={setPuntuacion}
            name={props.name}
          />{" "}
        </div>
      ) : null}
    </div>
  );
}
