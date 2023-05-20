import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products, Slider, Filter, Paginator } from "../../components";
import { useSearchParams } from "react-router-dom";

import {
  clearProducts,
  getProducts,
} from "../../redux/actions/productActions.";
import styles from "./Home.module.scss";
import { urlAxios } from "../../utils";

interface Product {
  products: object[];
}

interface State {
  products: Product;
}

function Home() {
  const [index, setIndex] = useState(0);
  const [pages, setPages] = useState(0);
  const [params] = useSearchParams();
  const dispatch: any = useDispatch();
  const productsList = useSelector((state: State) => state.products);
  const { products } = productsList;

  const queryParams = new URLSearchParams(window.location.search);
  const queryParamsString = queryParams.toString();

  let paramSearch = params.get("search");


  // const getPages = async () => {
  //   const { data }: any = await urlAxios("/product");
  //   console.log(data);
  // };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("index", index.toString())
    dispatch(clearProducts());
    dispatch(getProducts(queryParams.toString()));
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
      <Paginator setIndex={setIndex} pages={pages} />
    </Fragment>
  );
}

export default Home;
