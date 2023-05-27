import { useSelector } from "react-redux";
import { DetailProd } from "../../utils";
import { urlAxios } from "../../utils";
import { useEffect } from "react";
import { useState } from "react";
import { Products } from "../../components";
import { Link } from "react-router-dom";
import styles from "./Vendedor.module.scss";
import { getProductDetail } from "../../redux/actions/productActions.";
import { Rating } from "../../components";
import { useParams } from "react-router-dom";
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
  const params = useParams();
  const id = params.id;
  console.log(id);
  console.log(detail);
  const [allProducts, setAllProducts] = useState([]);
  const [puntuaction, setPunctuation] = useState(0);
  useEffect(() => {
    getProductDetail(id);
    getAllProd();
  }, []);

  const getAllProd = async () => {
    const { data } = await urlAxios(`/user?email=${email}`);
    const products = data?.products;
    setAllProducts(products);
    const puntuation = data.punctuation;
    setPunctuation(puntuation);
  };
  return (
    <div>
      <div className={styles.contenedor}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.ventas}>Cantidad de ventas: 100</p>
        <p className={styles.puntuacion}>
          <Rating punctuation={puntuaction} />
        </p>
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
