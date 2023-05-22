import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Products,
  Slider,
  Filter,
  Paginator,
  Calificar,
} from "../../components";
import { useSearchParams, useNavigate } from "react-router-dom";

import {
  clearProducts,
  getProducts,
} from "../../redux/actions/productActions.";
import styles from "./Home.module.scss";

interface Product {
  products: object[];
  totalPages: number;
  currentPage: number;
}

interface State {
  products: Product;
}

function Home() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const dispatch: any = useDispatch();
  const { products, totalPages, currentPage } = useSelector(
    (state: State) => state.products
  );

  const queryParams = new URLSearchParams(window.location.search);
  let queryParamsString = queryParams.toString();

  let paramSearch = queryParams.get("search");

  useEffect(() => {
    dispatch(clearProducts());
    queryParams.set("index", `${index}`);
    queryParamsString = queryParams.toString();
    console.log(queryParamsString);
    dispatch(getProducts(queryParamsString));
    // ! navigate({ search: queryParamsString });
  }, [queryParamsString, index]);

  return (
    <Fragment>
      <div className={styles.home}>
        <Filter />
        <div>
          {paramSearch ? "" : <Slider />}
          <Products products={products} />
        </div>
      </div>
      <Paginator setIndex={setIndex} pages={totalPages} page={currentPage} />
      <Calificar />
    </Fragment>
  );
}

export default Home;
