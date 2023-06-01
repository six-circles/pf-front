import styles from "./Compras.module.scss";
import { CardCompras } from "../../../components";
import { useEffect, useState } from "react";
import { urlAxios } from "../../../utils";

function Ordenes({ order }: any) {
  const [delivery, setDelivery] = useState([]);
  const getDeliveryOrders = async () => {
    const { data } = await urlAxios(`/deliveries/${order._id}`);

    console.log(data);
    setDelivery(data);
  };

  useEffect(() => {
    getDeliveryOrders();
  }, []);

  return (
    <div className={styles.ordenes}>
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
          delivery={delivery}
        />
      ))}
    </div>
  );
}

export default Ordenes;
