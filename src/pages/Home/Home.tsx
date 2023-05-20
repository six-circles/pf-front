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

  let paramSearch = params.get("search");

  // const getPages = async () => {
  //   const { data }: any = await urlAxios("/product");
  //   console.log(data);
  // };

  useEffect(() => {
    if (!paramSearch) {
      dispatch(clearProducts());
      // getPages();
      dispatch(getProducts("", "", "", index));
    }
  }, [dispatch, index]);

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
