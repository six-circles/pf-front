import React, { Fragment } from "react";
import styles from "../CreateProduct.module.scss";

function Tech({ handleChars }: any) {
  return (
    <Fragment>
      <label htmlFor="colors">Color</label>
      <div className={styles.form_camp_chars}>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="red"
            name="color"
            onChange={handleChars}
          />
          <label>Rojo</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="blue"
            onChange={handleChars}
            name="color"
          />
          <label>Azul</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="black"
            name="color"
            onChange={handleChars}
          />
          <label>Negro</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="white"
            name="color"
            onChange={handleChars}
          />
          <label>Blanco</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="green"
            name="color"
            onChange={handleChars}
          />
          <label>Verde</label>
        </div>
      </div>

      <label htmlFor="capacidad">Capacidad</label>
      <div className={styles.form_camp_chars}>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="16GB"
            name="cap"
            onChange={handleChars}
          />
          <label>16GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="32GB"
            name="cap"
            onChange={handleChars}
          />
          <label>32GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="64GB"
            name="cap"
            onChange={handleChars}
          />
          <label>64GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="128GB"
            name="cap"
            onChange={handleChars}
          />
          <label>128GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="256GB"
            name="cap"
            onChange={handleChars}
          />
          <label>256GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="500GB"
            name="cap"
            onChange={handleChars}
          />
          <label>500GB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="1TB"
            name="cap"
            onChange={handleChars}
          />
          <label>1TB</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="2TB"
            name="cap"
            onChange={handleChars}
          />
          <label>2TB</label>
        </div>
      </div>
    </Fragment>
  );
}

export default Tech;
