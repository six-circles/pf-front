import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Products, Slider, Filter } from "../../components";
import { useSearchParams } from "react-router-dom";

import { getProducts } from "../../redux/actions/productActions.";
import styles from "./Home.module.scss";

function Home() {
  const [params] = useSearchParams();
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (!paramSearch) {
      dispatch(getProducts());
    }
  }, []);

  let paramSearch = params.get("search");

  return (
    <Fragment>
      <div className={styles.home}>
        <Filter />
        <div>
          {paramSearch ? "" : <Slider />}
          <Products />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
