import styles from "./CardCompras.module.scss";
import { clearProducts } from "../../../redux/actions/productActions.";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}
export default function (props: Product) {
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  const handleClick = () => {
    dispatch(clearProducts());
    navigate(`/detail/${props.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={props.image[0]} alt={props.name.slice(0, 10)} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{props.name}</h3>
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
    </div>
  );
}
