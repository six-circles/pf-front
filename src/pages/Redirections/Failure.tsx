import styles from "./response.module.scss";
import { useEffect } from "react";
import { Resumen } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartProducts } from "../../redux/actions/carritoActions";

function Failure() {
  const { cartProducts } = useSelector((state: any) => state.carrito);
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  return (
    <div className={styles.response}>
      <div className={styles.response_failure}>
        <div className={styles.response_info}>
          <h3>No se pudo completar el pago</h3>
          <button onClick={() => navigate("/")}>Volver a Inicio</button>
        </div>

        <Resumen productos={cartProducts} />
      </div>
    </div>
  );
}

export default Failure;
