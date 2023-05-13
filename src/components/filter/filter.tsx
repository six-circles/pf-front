// index.ts
import React, { useState } from "react";
import styles from "./styles.module.css";

const MyComponent = () => {
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [punctuationOrder, setPunctuationOrder] = useState<string>("mayormenor");

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const handlePuntuation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPunctuationOrder(event.target.value);
  };

  return (
    <>
      <div className={styles.filterC}>
        <select onChange={handleSort} className={styles.select}>
          <option value="asc">ascendente(A-Z)</option>
          <option value="des">descendente(Z-A)</option>
        </select>
      </div>
      <div>
        <select onChange={handlePuntuation} className={styles.select}>
          <option value="mayormenor">mayor a menor </option>
          <option value="menormayor">menor a mayor </option>
        </select>
      </div>
    </>
  );
};

export default MyComponent;
