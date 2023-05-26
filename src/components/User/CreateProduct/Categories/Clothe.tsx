import { Fragment } from "react";
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

      <label htmlFor="talla">Talla Pantalon</label>
      <div className={styles.form_camp_chars}>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="28"
            name="talla-pantalon"
            onChange={handleChars}
          />
          <label>28</label>
        </div>

        <div className="camp_chars">
          <input
            type="checkbox"
            value="30"
            name="talla-pantalon"
            onChange={handleChars}
          />
          <label>30</label>
        </div>

        <div className="camp_chars">
          <input
            type="checkbox"
            value="32"
            name="talla-pantalon"
            onChange={handleChars}
          />
          <label>32</label>
        </div>

        <div className="camp_chars">
          <input
            type="checkbox"
            value="34"
            name="talla-pantalon"
            onChange={handleChars}
          />
          <label>34</label>
        </div>

        <div className="camp_chars">
          <input
            type="checkbox"
            value="36"
            name="talla-pantalon"
            onChange={handleChars}
          />
          <label>36</label>
        </div>

        <div className="camp_chars">
          <input
            type="checkbox"
            value="38"
            name="talla-pantalon"
            onChange={handleChars}
          />
          <label>38</label>
        </div>

        <div className="camp_chars">
          <input
            type="checkbox"
            value="40"
            name="talla-pantalon"
            onChange={handleChars}
          />
          <label>40</label>
        </div>

        <div className="camp_chars">
          <input
            type="checkbox"
            value="42"
            name="talla-pantalon"
            onChange={handleChars}
          />
          <label>42</label>
        </div>
      </div>

      <label htmlFor="talla">Talla Tenis</label>
      <div className={styles.form_camp_chars}>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="6"
            name="talla-tenis"
            onChange={handleChars}
          />
          <label>6</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="7"
            name="talla-tenis"
            onChange={handleChars}
          />
          <label>7</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="8"
            name="talla-tenis"
            onChange={handleChars}
          />
          <label>8</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="9"
            name="talla-tenis"
            onChange={handleChars}
          />
          <label>9</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="10"
            name="talla-tenis"
            onChange={handleChars}
          />
          <label>10</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="11"
            name="talla-tenis"
            onChange={handleChars}
          />
          <label>11</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="12"
            name="talla-tenis"
            onChange={handleChars}
          />
          <label>12</label>
        </div>
        <div className="camp_chars">
          <input
            type="checkbox"
            value="13"
            name="talla-tenis"
            onChange={handleChars}
          />
          <label>13</label>
        </div>
      </div>

      {/* <div className={styles.form_camp_chars}>
        <div className="camp_chars">
          <label htmlFor="talla-tenis">Talla Tenis: </label>
          <input type="number" onChange={handleChars} />
          <div></div>
        </div>
      </div> */}
    </Fragment>
  );
}

export default Clothe;
