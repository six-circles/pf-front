import { DetailProd } from "../../utils";
import { urlAxios } from "../../utils";
import { useEffect } from "react";
import { useState } from "react";
import { Products } from "../../components";
import styles from "./Vendedor.module.scss";
import { Rating } from "../../components";
import { useParams } from "react-router-dom";
import { getToken } from "../../utils";
import Swal from "sweetalert2";
interface Products {
  detail: DetailProd;
  products: any;
}

export default function () {
  const params = useParams();
  const encriptado: any = params?.email;
  const emailOriginal: any = window.atob(encriptado);

  const [allProducts, setAllProducts] = useState([]);
  const [puntuaction, setPunctuation] = useState(0);
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState(false);

  const getAdmin = async () => {
    const { token } = getToken();
    const { data } = await urlAxios(`/user/${token}`);

    const admin = data?.admin;
    if (admin && data.email !== emailOriginal) {
      setAdmin(true);
    }
  };

  const bannerSeller = async () => {
    try {
      await urlAxios.patch(`/user?email=${emailOriginal}`);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Blocked",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  useEffect(() => {
    getAllProd();
    getAdmin();
  }, []);

  const getAllProd = async () => {
    const { data } = await urlAxios(`/user?email=${emailOriginal}`);
    const products = data?.products;
    setAllProducts(products);
    const puntuation = data?.punctuation;
    setPunctuation(puntuation);
    const name = data?.name;
    setName(name);
  };

  return (
    <div>
      <div className={styles.title}>
        {admin ? (
          <button onClick={bannerSeller} className={styles.button}>
            Suspender vendedor
          </button>
        ) : null}

        <h1 className={styles.title}>{name}</h1>
      </div>
      <div className={styles.contenedor}>
        <Rating punctuation={puntuaction} />
        <p>(5)</p>
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
