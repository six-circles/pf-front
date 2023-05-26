import { Fragment } from "react";
import Colors from "./Colors";

// import styles from "../CreateProduct.module.scss";

function Muebles({ handleChars }: any) {
  return (
    <Fragment>
      <label htmlFor="colors">Color</label>
      <Colors handleChars={handleChars} />
    </Fragment>
  );
}

export default Muebles;
