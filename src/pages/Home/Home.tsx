
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Products, Slider,Filter, Comments } from "../../components";


import { getProducts } from "../../redux/actions/productActions.";

function Home() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Fragment>
      <Slider />
      <Products />
      <Filter/>
     <Comments />
    </Fragment>
  );
}

export default Home;
