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
  // const itemsPerPage = 12;
  // const [index1, setIndex1] = useState(1);
  // const [index2, setIndex2] = useState(itemsPerPage);
  const [params] = useSearchParams();
  const dispatch: any = useDispatch();
  const productsList = useSelector((state: State) => state.products);
  const { products } = productsList;

  const queryParams = new URLSearchParams(window.location.search);
  const queryParamsString = queryParams.toString();

  let paramSearch = params.get("search");

  useEffect(() => {
    dispatch(clearProducts());
    dispatch(getProducts(queryParamsString));
  }, [queryParams]);

  return (
    <Fragment>
      <div className={styles.home}>
        <Filter />
        <div>
          {paramSearch ? "" : <Slider />}
          <Products products={products} />
        </div>
      </div>
      {/* <Paginator
        setIndex1={setIndex1}
        setIndex2={setIndex2}
        itemsPerPage={itemsPerPage}
      /> */}
    </Fragment>
  );
}

export default Home;
