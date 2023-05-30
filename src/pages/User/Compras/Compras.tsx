import { useEffect, useState } from "react";
import { getToken } from "../../../utils";
import CardCompras from "../../../components/User/Compras/CardCompras";
import styles from "./Compras.module.scss";
import { urlAxios } from "../../../utils";
interface State {
  compras: Product;
}
interface Product {
  products: object[];
}
export default function () {
  const [compras, setCompras] = useState([]);
  const { token } = getToken();
  const getProducts = async () => {
    const { data } = await urlAxios(`/order/${token}`);

    const ordenes = data?.order;

    setCompras(ordenes);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>MIS COMPRAS</h1>
      {compras.length ? (
        <div className={styles.cards}>
          {compras.map((order: any) => (
            <div className={styles.ordenes}>
              <h1>compra 1</h1>
              {order.shoppingCart.map((product: any) => (
                <CardCompras
                  key={product._id}
                  id={product._id}
                  name={product.title}
                  image={product.image}
                  price={product.price}
                  punctuation={product.punctuation}
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
