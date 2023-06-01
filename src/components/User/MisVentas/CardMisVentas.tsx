import styles from "./CardMisVentas.module.scss";
import { clearProducts } from "../../../redux/actions/productActions.";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

interface Product {
  key: any;
  id: any;
  name: string;
  image: any;
  price: number;
  punctuation: number;
  cantidadCarrito: number;
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

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img
          src={props.image[0].url}
          alt={props.name.slice(0, 10)}
          onClick={() => handleClick()}
        />
      </div>
      <div className={styles.contTitle}>
        <h4 className={styles.title} onClick={() => handleClick()}>
          {props.name}... ({props.cantidadCarrito})
        </h4>
      </div>

      <div className={styles.precio}>
        {/* <p className={styles.precio}> */}
        Total ${props.price * props.cantidadCarrito}
        {/* </p> */}
      </div>
    </div>
  );
}
