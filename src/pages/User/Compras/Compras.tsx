import { useEffect, useState } from "react";
import { getToken } from "../../../utils";
import CardCompras from "../../../components/User/Compras/CardCompras";
import styles from "./Compras.module.scss";
import { urlAxios } from "../../../utils";
import { useSelector } from "react-redux";
//cambiar la ruta por la de get comprabyuser --> reutilizar este comp para more products
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
    // let comprasPrueba: Object[] = [];
    // ordenes.map((order: any) =>
    //   order.shoppingCart.map((product: any) => comprasPrueba.push(product))
    // );

    // console.log(comprasPrueba);
    // setCompras(comprasPrueba);
    setCompras(ordenes);
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(compras);

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
