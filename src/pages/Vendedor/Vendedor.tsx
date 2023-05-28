import { DetailProd } from "../../utils";
import { urlAxios } from "../../utils";
import { useEffect } from "react";
import { useState } from "react";
import { Products } from "../../components";
import styles from "./Vendedor.module.scss";
import { Rating } from "../../components";
import { useParams } from "react-router-dom";
import { getToken } from "../../utils";

interface Products {
  detail: DetailProd;
  products: any;
}

interface State {
  products: Products;
}

export default function () {
  const params = useParams();
  const id = params.id;
  const users = async () => {
    const { data } = await urlAxios("/users");
    const user = data.find((e: any) => id === e._id);
    return user;
  };
  const [allProducts, setAllProducts] = useState([]);
  const [puntuaction, setPunctuation] = useState(0);
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState(false);
  const getAdmin = async () => {
    const { token } = getToken();
    const { data } = await urlAxios(`/user/${token}`);
    const admin = data.admin;
    if (admin) setAdmin(true);
  };

  const deleteSeller = () => {};
  useEffect(() => {
    getAllProd();
    getAdmin();
  }, []);

  const getAllProd = async () => {
    const user = await users();
    const email = user.email;
    const { data } = await urlAxios(`/user?email=${email}`);
    const products = data?.products;
    setAllProducts(products);
    const puntuation = data?.punctuation;
    setPunctuation(puntuation);
    const name = data?.name;
    setName(name);
  };

  return (
    <div>
      {admin ? <button onClick={deleteSeller}>X</button> : null}
      <div className={styles.contenedor}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.ventas}>Cantidad de ventas: 100</p>
        <div className={styles.puntuacion}>
          <Rating punctuation={puntuaction} />
        </div>
      </div>
      <div>
        {allProducts ? (
          <Products products={allProducts} />
        ) : (
          <p>"el vendedor no tiene productos publicados"</p>
        )}
      </div>
    </div>
  );
}
