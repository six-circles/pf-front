import { getToken, urlAxios } from "../../utils";
import { useEffect, useState } from "react";
import styles from "./Resumen.module.scss";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago(import.meta.env.VITE_PUBLIC_KEY_MERCADOPAGO);

export default function ({ productos }: any) {
  let totalPerProduct = productos.map((p: any) => p.price * p.cantidadCarrito);
  const { token } = getToken();
  const total = totalPerProduct.reduce((acc: any, val: any) => {
    return acc + val;
  }, 0);

  const products = { shoppingCart: productos };
  const [preferenceId, setPreferenceId] = useState<string | undefined | any>(
    undefined
  );

  const getPreferenceId = async () => {
    try {
      const { data } = await urlAxios.post(`/mercadopago/${token}`, products);

      setPreferenceId(data.id);
    } catch (err: any) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    getPreferenceId();

    return () => {
      setPreferenceId(undefined);
    };
  }, [productos]);

  console.log(preferenceId);

  return (
    <div className={styles.resume}>
      <div className={styles.title}>
        <h3>Resumen</h3>
      </div>
      <div className={styles.resume_cont}>
        {productos?.map((p: any) => (
          <div className={styles.resume_product} key={p._id}>
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

      {preferenceId && (
        <div id="wallet_container" style={{ padding: "0rem 2rem" }}>
          <Wallet initialization={{ preferenceId }} />
        </div>
      )}
    </div>
  );
}
