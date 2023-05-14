import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Products, Slider } from "../../components";

import { getProducts } from "../../redux/actions/productActions.";

function Home() {
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Fragment>
      <Slider />
      <Products />
    </Fragment>
  );
}

export default Home;
