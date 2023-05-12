import { Fragment } from "react";
import { MoreProduct, Details } from "../../components";

import styles from "./Detail.module.scss";

function Detail() {
  return (
    <Fragment>
      <div className={styles.product_cont}>
        <div>Imagenes</div>
        <Details />
      </div>
      <MoreProduct />
      <div>Comentarios | Preguntas</div>
    </Fragment>
  );
}

export default Detail;
