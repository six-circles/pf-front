import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products, Slider, Filter, Paginator } from "../../components";
import { useSearchParams } from "react-router-dom";

import {
  clearProducts,
  getProducts,
} from "../../redux/actions/productActions.";
import styles from "./Home.module.scss";

interface Product {
  products: object[];
}

interface State {
  products: Product;
}

function Home() {
  const [params] = useSearchParams();
  const dispatch: any = useDispatch();
  const productsList = useSelector((state: State) => state.products);
  const { products } = productsList;

  let paramSearch = params.get("search");

  useEffect(() => {
    if (!paramSearch) {
      dispatch(clearProducts());
      dispatch(getProducts());
    }
  }, []);

  return (
    <Fragment>
      <div className={styles.home}>
        <Filter />
        <div>
          {paramSearch ? "" : <Slider />}
          <Products products={products} />
          <Paginator items={products} />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
