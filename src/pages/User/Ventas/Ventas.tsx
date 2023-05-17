import { useEffect, useState } from "react";
import { getToken, urlAxios } from "../../../utils";
import CardProduct from "../../../components/Home/Products/CardProduct";

import styles from "./Ventas.module.scss";
import { useNavigate } from "react-router-dom";

export default function () {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { token } = getToken();

  const getProducts = async () => {
    try {
      const { data } = await urlAxios(`/${token}/product`);
      setProducts(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.ventas}>
      <button onClick={() => navigate("create_product")}>Crear Producto</button>

      <div>
        {products?.map((item: any, i) => (
          <CardProduct
            key={i}
            id={item.id}
            punctuation={item.punctuations}
            image={item.image}
            price={item.price}
            name={item.title}
          />
        ))}
      </div>
    </div>
  );
}
