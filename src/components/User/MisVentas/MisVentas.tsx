import { useEffect, useState } from "react";
import { getToken } from "../../../utils";
import styles from "./MisVentas.module.scss";
import { urlAxios } from "../../../utils";
import CardMisVentas from "./CardMisVentas";

export default function () {
  const [compras, setCompras] = useState([]);
  const { token } = getToken();

  const getProducts = async () => {
    const { data } = await urlAxios.get(`/sales/${token}`);
    console.log(data);

    const ordenes = data?.orders;
    setCompras(ordenes);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>MIS VENTAS</h1>
      {compras?.length ? (
        <div className={styles.cards}>
          {compras.map((order: any) => (
            <div className={styles.ordenes} key={Math.random()}>
              <p>{order.created.slice(0, 10)} | <b>Comprador: <a href={`mailto:${order.userComprador.email}`}>{order.userComprador.email}</a></b></p>
              {order.shoppingCart.map((product: any) => (
                <CardMisVentas
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
