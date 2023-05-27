import { getToken, urlAxios } from "../../utils";
import styles from "./Resumen.module.scss";

export default function ({ productos }: any) {
  let totalPerProduct = productos.map((p: any) => p.price * p.cantidadCarrito);
  const { token } = getToken();
  const total = totalPerProduct.reduce((acc: any, val: any) => {
    return acc + val;
  }, 0);

  const products = { shoppingCart: productos };

  const handlePay = async () => {
    const { data } = await urlAxios.post(`/mercadopago/${token}`, products);

    window.open(data.url, "_blank");
  };

  return (
    <div className={styles.resume}>
      <div className={styles.title}>
        <h3>Resumen</h3>
      </div>
      <div className={styles.resume_cont}>
        {productos?.map((p: any) => (
          <div className={styles.resume_product}>
            <p className={styles.name}>
              {p.title.slice(0, 15)} ({p.cantidadCarrito})
            </p>
            <p>${p.price * p.cantidadCarrito}</p>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <p>Total</p>
        <p>${total}</p>
      </div>

      <div className={styles.buy}>
        <button onClick={handlePay}>Comprar</button>
      </div>
    </div>
  );
}
