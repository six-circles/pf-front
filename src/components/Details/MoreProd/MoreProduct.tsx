import { urlAxios } from "../../../utils";
import { useEffect, useState } from "react";
import CardProduct from "../../Home/Products/CardProduct";
import styles from "./MoreProducts.module.scss";
import { useSelector } from "react-redux";
import { DetailProd } from "../../../utils";

interface Products {
  detail: DetailProd;
}

interface State {
  products: Products;
}

export default function MoreProduct() {
  const [moreProducts, setMoreProducts] = useState([]);
  const { detail } = useSelector((state: State) => state.products);

  const user = detail.user;
  const email = user?.email;

  const getProduct = async (email: string) => {
    const { data } = await urlAxios(`/user?email=${email}`);
    const { products } = data.user;
    const allprod = products.filter((p: any) => p.enable === true);
    setMoreProducts(allprod);
  };

  useEffect(() => {
    getProduct(email);
  }, []);

  const moreProd = moreProducts.slice(0, 5);

  return (
    <>
      {moreProd && (
        <div className={styles.contenedor}>
          <h1 className={styles.title}>Más productos del vendedor</h1>
          <div className={styles.card}>
            {moreProd?.map((item: any) => (
              <CardProduct
                key={item._id}
                id={item._id}
                name={item.title}
                image={item.image}
                punctuation={item.punctuations}
                price={item.price}
                condition={item.condition}
                stock={item.stock}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
