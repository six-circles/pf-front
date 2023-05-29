import styles from "./response.module.scss";
import { useEffect } from "react";
import { Resumen } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartProducts } from "../../redux/actions/carritoActions";

function Pending() {
  const { cartProducts } = useSelector((state: any) => state.carrito);
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  return (
    <div className={styles.response}>
      <div className={styles.response_pending}>
        <div className={styles.response_info}>
          <h3>Se esta procesando el pago</h3>
          <button onClick={() => navigate("/")}>Volver a Inicio</button>
        </div>

        <Resumen productos={cartProducts} />
      </div>
    </div>
  );
}

export default Pending;
