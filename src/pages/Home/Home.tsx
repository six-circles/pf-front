import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Products, Slider, Filter } from "../../components";

import { getProducts } from "../../redux/actions/productActions.";
import styles from "./Home.module.scss";

function Home() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Fragment>
      <div className={styles.home}>
        <Filter />
        <div>
          <Slider />
          <Products />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
