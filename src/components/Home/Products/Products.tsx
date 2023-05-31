import CardProduct from "./CardProduct";

import styles from "./Products.module.scss";

function Products({ products }: any) {
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
          condition={item.condition}
          user={item.user}
          enable={item.enable}
          stock={item.stock}
        />
      ))}
    </div>
  );
}

export default Products;
