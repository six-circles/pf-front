import CardProduct from "./CardProduct";
import { productsList } from "../../utils";

import styles from "./Products.module.scss";

function Products() {
  return (
    <div className={styles.products}>
      {productsList.map((item) => (
        <CardProduct
          key={item._id.$oid}
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
