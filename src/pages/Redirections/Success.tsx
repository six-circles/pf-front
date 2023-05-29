import styles from "./response.module.scss";
import { useEffect, useState } from "react";
import { Resumen } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartProducts } from "../../redux/actions/carritoActions";
import { getToken, urlAxios } from "../../utils";

function Success() {
  const [order, setOrder] = useState({});
  const { cartProducts } = useSelector((state: any) => state.carrito);
  const { token } = getToken();
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  const createOrder = async () => {
    const newOrder = {
      shoppingCart: cartProducts,
      token,
    };

    try {
      const { data } = await urlAxios.post("/order", newOrder);

      setOrder(data.order);
    } catch (err: any) {
      console.log(err.reponse.data);
    }
  };

  const handleHome = async () => {
    await urlAxios.delete(`/shoppingCart/${token}`);
    navigate("/");
  };

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      createOrder();
    }
  }, [cartProducts]);

  return (
    <div className={styles.response}>
      <div className={styles.response_success}>
        <div className={styles.response_info}>
          <h3>¡Compra realizada con exito!</h3>
          <button onClick={handleHome}>Volver a Inicio</button>
        </div>

        <Resumen productos={cartProducts} button={false} />
      </div>
    </div>
  );
}

export default Success;
