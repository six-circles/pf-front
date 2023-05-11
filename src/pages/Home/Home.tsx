import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Products } from "../../components";
import Slider from "../../components/Slider/Slider";

import heroSliderData from "../../utils/data-slider";
import { getProducts } from "../../redux/actions/productActions.";
// import styles from "./Home.module.scss";

// interface State {
//   products: object;
// }

function Home() {
  // const { products } = useSelector((state: State) => state.products);
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Fragment>
      <Slider data={heroSliderData} />
      <Products />
    </Fragment>
  );
}

export default Home;
