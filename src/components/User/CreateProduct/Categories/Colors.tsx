import React from "react";
import styles from "../CreateProduct.module.scss";

function Colors({ handleChars }: any) {
  return (
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
      <div className="camp_chars">
        <input
          type="checkbox"
          value="pink"
          name="color"
          onChange={handleChars}
        />
        <label>Rosa</label>
      </div>
      <div className="camp_chars">
        <input
          type="checkbox"
          value="brown"
          name="color"
          onChange={handleChars}
        />
        <label>Cafe</label>
      </div>
      <div className="camp_chars">
        <input
          type="checkbox"
          value="gray"
          name="color"
          onChange={handleChars}
        />
        <label>Gris</label>
      </div>
      <div className="camp_chars">
        <input
          type="checkbox"
          value="yellow"
          name="color"
          onChange={handleChars}
        />
        <label>Amarilo</label>
      </div>
      <div className="camp_chars">
        <input
          type="checkbox"
          value="orange"
          name="color"
          onChange={handleChars}
        />
        <label>Naranja</label>
      </div>
    </div>
  );
}

export default Colors;
