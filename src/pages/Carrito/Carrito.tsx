// import { CardCarritoMenuDespl } from "../../components"
import { CarritoPage, Resumen } from "../../components/index";
import { useSelector } from "react-redux";
import styles from "./Carrito.module.scss";
import { urlAxios } from "../../utils";
import { getToken } from "../../utils/index";

export default function () {
  const { cartProducts } = useSelector((state: any) => state.carrito);
  const user = getToken();
  const token = user.token;

  const handleCheckout = async () => {
    console.log("PRODUCTOS: ", cartProducts);

    const urlBack = import.meta.env.VITE_BACK_URL || "";
    try {
      const { data } = await urlAxios.post(`${urlBack}/mercadopago/${token}`, {
        shoppingCart: cartProducts,
      });
      console.log("ID mercadoPago: ", data.url);
      window.location.href = data.url;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <div className={styles.contCarrito}>
      <div className={styles.card}>
        {cartProducts.length ? (
          cartProducts.map((p: any) => <CarritoPage key={p._id} producto={p} />)
        ) : (
          <h3>No hay nada por aquí...</h3>
        )}
      </div>
      {cartProducts.length && (
        <Resumen
          productos={cartProducts}
          key={cartProducts._id}
          onClick={handleCheckout}
        />
      )}
    </div>
  );
}
