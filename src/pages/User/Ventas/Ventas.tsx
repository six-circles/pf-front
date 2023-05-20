import { useEffect, useState } from "react";
import { getToken, urlAxios } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CardVentas } from "../../../components";

import styles from "./Ventas.module.scss";
import { clearProducts } from "../../../redux/actions/productActions.";

export default function () {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { token } = getToken();
  const dispatch: Function = useDispatch();

  const getProducts = async () => {
    try {
      const { data } = await urlAxios(`/${token}/product`);
      setProducts(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    // checkAuth("product", navigate);
    dispatch(clearProducts());
    getProducts();
  }, []);

  return (
    <div className={styles.ventas}>
      <button onClick={() => navigate("create_product")}>Crear Producto</button>

      <div className={styles.products}>
        {products?.map((item: any) => (
          <CardVentas
            key={item._id}
            id={item._id}
            punctuation={item.punctuations}
            image={item.image}
            price={item.price}
            name={item.title}
            condition={item.condition}
            enable={item.enable}
          />
        ))}
      </div>
    </div>
  );
}
