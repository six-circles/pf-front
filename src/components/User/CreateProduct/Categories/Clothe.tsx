import React, { Fragment } from "react";
import Colors from "./Colors";

import styles from "../CreateProduct.module.scss";

function Clothe({ handleChars }: any) {
  return (
    <Fragment>
      <label htmlFor="colors">Color</label>
      <Colors handleChars={handleChars} />

      <label htmlFor="talla">Talla</label>
      <div className={styles.form_camp_chars}>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="XS"
            name="talla"
            onChange={handleChars}
          />
          <label>XS</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="S"
            name="talla"
            onChange={handleChars}
          />
          <label>S</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="M"
            name="talla"
            onChange={handleChars}
          />
          <label>M</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="L"
            name="talla"
            onChange={handleChars}
          />
          <label>L</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="XL"
            name="talla"
            onChange={handleChars}
          />
          <label>XL</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="XXL"
            name="talla"
            onChange={handleChars}
          />
          <label>XXL</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="XXXL"
            name="talla"
            onChange={handleChars}
          />
          <label>XXXL</label>
        </div>
      </div>
    </Fragment>
  );
}

export default Clothe;
