import { Fragment } from "react";
import { Products, Filter, Comments} from "../../components";
import Slider from "../../components/Slider/Slider";

import heroSliderData from "../../utils/data-slider";
import styles from "./Home.module.scss";

function Home() {
  return (
    <Fragment>
      <Slider data={heroSliderData} />
      <Products />
      <Filter/>
     <Comments />
    </Fragment>
  );
}

export default Home;
