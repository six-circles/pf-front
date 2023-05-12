import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";

import styles from "./Products.module.scss";

interface Products {
  products: object[];
}

interface State {
  products: Products;
}

function Products() {
  const productsList = useSelector((state: State) => state.products);
  const { products } = productsList;

  return (
    <div className={styles.products}>
      {products.map((item: any) => (
        <CardProduct
          key={item._id}
          id={item._id}
          name={item.title}
          image={item.image}
          punctuation={item.punctuations}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Products;
