import { useEffect, useState } from "react";
import { getToken, getUserRemote } from "../../../utils";
import styles from "./MisVentas.module.scss";
import { urlAxios } from "../../../utils";
import CardMisVentas from "./CardMisVentas";

export default function () {
  const [compras, setCompras] = useState([]);
  const { token } = getToken();
  const [status, setStatus] = useState<"2" | "1" | "0">("0");
  const [id, setId] = useState();

  const getProducts = async () => {
    const { data } = await urlAxios.get(`/sales/${token}`);
    console.log(data);

    const ordenes = data?.orders;
    setCompras(ordenes);
  };

  const handleStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value as "2" | "1" | "0";
    urlAxios("/").then()
    setStatus(selected);
  };

  useEffect(() => {
    getUserRemote().then(elem => setId(elem.id));
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
              <form className={styles.contForm}>
                <label>Actualizar status: </label>
                <select value={status} onChange={handleStatus}>
                  <option value="0">Pendiente</option>
                  <option value="1">En progreso</option>
                  <option value="2">Completada</option>
                </select>
              </form>
              {order.shoppingCart.filter((elem: any) => elem.user === id).map((product: any) => (
                <CardMisVentas
                  key={Math.random()}
                  id={product._id}
                  name={product.title}
                  image={product.image}
                  price={product.price}
                  punctuation={product.punctuation}
                  cantidadCarrito={product.cantidadCarrito}
                />
              )
              )}
            </div>
          ))}

        </div>
      ) : (
        <h3>no tienes ventas aún...</h3>
      )}
    </div>
  );
}
