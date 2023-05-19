import { Fragment, useEffect, useState } from "react";
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
  const itemsPerPage = 12;
  const [index1, setIndex1] = useState(1);
  const [index2, setIndex2] = useState(itemsPerPage);
  const [params] = useSearchParams();
  const dispatch: any = useDispatch();
  const productsList = useSelector((state: State) => state.products);
  const { products } = productsList;

  let paramSearch = params.get("search");

  useEffect(() => {
    console.log(index1, index2);
    if (!paramSearch) {
      dispatch(clearProducts());
      dispatch(getProducts("", "", "", index1, index2));
    }
  }, [index1, index2]);

  return (
    <Fragment>
      <div className={styles.home}>
        <Filter />
        <div>
          {paramSearch ? "" : <Slider />}
          <Products products={products} />
        </div>
      </div>
      <Paginator
        setIndex1={setIndex1}
        setIndex2={setIndex2}
        itemsPerPage={itemsPerPage}
      />
    </Fragment>
  );
}

export default Home;
