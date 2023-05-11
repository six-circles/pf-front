import { Fragment } from "react";
import { Products } from "../../components";
import Slider from "../../components/Slider/Slider";

import heroSliderData from "../../utils/data-slider";
import styles from "./Home.module.scss";

function Home() {
  return (
    <Fragment>
      <Slider data={heroSliderData} />
      <Products />
    </Fragment>
  );
}

export default Home;
