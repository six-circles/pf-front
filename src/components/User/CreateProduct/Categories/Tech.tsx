import React, { Fragment } from "react";

import Colors from "./Colors";
import styles from "../CreateProduct.module.scss";

function Tech({ handleChars }: any) {
  return (
    <Fragment>
      <label htmlFor="colors">Color</label>
      <Colors handleChars={handleChars} />

      <label htmlFor="capacidad">Capacidad</label>
      <div className={styles.form_camp_chars}>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="16GB"
            name="capacidad"
            onChange={handleChars}
          />
          <label>16GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="32GB"
            name="capacidad"
            onChange={handleChars}
          />
          <label>32GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="64GB"
            name="capacidad"
            onChange={handleChars}
          />
          <label>64GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="128GB"
            name="capacidad"
            onChange={handleChars}
          />
          <label>128GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="256GB"
            name="capacidad"
            onChange={handleChars}
          />
          <label>256GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="500GB"
            name="capacidad"
            onChange={handleChars}
          />
          <label>500GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="1TB"
            name="capacidad"
            onChange={handleChars}
          />
          <label>1TB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="2TB"
            name="capacidad"
            onChange={handleChars}
          />
          <label>2TB</label>
        </div>
      </div>
    </Fragment>
  );
}

export default Tech;
