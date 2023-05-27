import { useSelector } from "react-redux";
import { DetailProd } from "../../utils";
import { urlAxios } from "../../utils";
import { useEffect } from "react";
import { useState } from "react";
import { Products } from "../../components";
import { Link } from "react-router-dom";
import styles from "./Vendedor.module.scss";
import { getProducts } from "../../redux/actions/productActions.";
import { Rating } from "../../components";
interface Products {
  detail: DetailProd;
}

interface State {
  products: Products;
}

export default function () {
  const { detail } = useSelector((state: State) => state.products);
  const user = detail.user;
  const email = user?.email;
  const name = user?.name;

  const [allProducts, setAllProducts] = useState([]);
  const [puntuaction, setPunctuation] = useState(0);

  const getAllProd = async () => {
    const { data } = await urlAxios(`/user?email=${email}`);
    const products = data?.products;
    setAllProducts(products);
    const puntuation = data.punctuation;
    setPunctuation(puntuation);
  };
  useEffect(() => {
    getProducts();
    getAllProd();
  }, []);
  return (
    <div>
      <div className={styles.puntuacion}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.ventas}>Cantidad de ventas: 100</p>
        <Rating punctuation={puntuaction} />
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
