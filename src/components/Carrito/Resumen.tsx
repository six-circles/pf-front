import { getToken, urlAxios } from "../../utils";
import { useEffect, useState } from "react";
import styles from "./Resumen.module.scss";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Loading } from "..";
initMercadoPago(import.meta.env.VITE_PUBLIC_KEY_MERCADOPAGO);

export default function ({ productos, button = true }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const prod = productos.filter((p: any) => p.enable);
  let totalPerProduct = prod.map((p: any) => p.price * p.cantidadCarrito);
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
      setIsLoading(true);
      const { data } = await urlAxios.post(`/mercadopago/${token}`, products);
      setPreferenceId(data.id);
      setIsLoading(false);
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

  return (
    <>
      <div className={styles.resume}>
        <div className={styles.title}>
          <h3>Resumen</h3>
        </div>
        <div className={styles.resume_cont}>
          {prod?.map((p: any) => (
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

        {preferenceId && button && (
          <div id="wallet_container" style={{ padding: "0rem 2rem" }}>
            <Wallet initialization={{ preferenceId }} />
          </div>
        )}
      </div>
    </>
  );
}
