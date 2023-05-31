import { useEffect, useState } from "react";
import { getToken } from "../../../utils";
import CardCompras from "../../../components/User/Compras/CardCompras";
import styles from "./Compras.module.scss";
import { urlAxios } from "../../../utils";

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
            <div className={styles.ordenes} key={Math.random()}>
              <p>{order.created.slice(0, 10)}</p>
              {order.shoppingCart.map((product: any) => (
                <CardCompras
                  key={Math.random()}
                  id={product._id}
                  name={product.title}
                  image={product.image}
                  price={product.price}
                  punctuation={product.punctuation}
                  cantidadCarrito={product.cantidadCarrito}
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <h3>no realizaste compras aún...</h3>
      )}
    </div>
  );
}
