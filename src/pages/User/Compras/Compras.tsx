import { useEffect, useState } from "react";
import { getToken } from "../../../utils";
import styles from "./Compras.module.scss";
import { urlAxios } from "../../../utils";
import Ordenes from "./Ordenes";

export default function () {
  const [compras, setCompras] = useState([]);
  const { token } = getToken();
  const getProducts = async () => {
    const { data } = await urlAxios(`/order/${token}`);
    const ordenes = data?.orders;
    setCompras(ordenes);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>MIS COMPRAS</h1>
      {compras?.length ? (
        <div className={styles.cards}>
          {compras.map((order: any) => (
            <Ordenes order={order} key={order._id} />
          ))}
        </div>
      ) : (
        <h3>no realizaste compras aún...</h3>
      )}
    </div>
  );
}
