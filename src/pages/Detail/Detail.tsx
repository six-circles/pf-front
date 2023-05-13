import { Fragment } from "react";
import { MoreProduct, Details } from "../../components";
import GalleryDetail from "../../components/Details/GalleryDetail/GalleryDetail"

import { heroSliderData } from "../../utils";
import styles from "./Detail.module.scss";

function Detail() {
  return (
    <Fragment>
      <div className={styles.product_cont}>
        <GalleryDetail data={heroSliderData} />
        <Details />
      </div>
      <MoreProduct />
      <div>Comentarios | Preguntas</div>
    </Fragment>
  );
}

export default Detail;
