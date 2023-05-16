import "./filter.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getProducts,
  orderProducts,
} from "../../redux/actions/productActions.";
import { useSearchParams } from "react-router-dom";

const Filter: React.FC = () => {
  const dispatch: any = useDispatch();
  const [params] = useSearchParams();
  const title = params.get("search") || "";

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const order = value.split(" ")[0];
    const type = value.split(" ")[1];
    dispatch(getProducts(title, order, type));
  };

  // !!falta combinarlo con la busqueda por nombre

  return (
    <div className="seccion">
      <div className="filtro">
        <h4>Orden</h4>
        {/* <ul>
          <li id="" onClick={handleclick}>
            Precio ascendente
          </li>
          <li id="menor" onClick={handleclick}>
            Precio descendente
          </li>
        </ul> */}
        <select name="order" onChange={handleChange} className="filtrp-select">
          <option disabled>Default</option>
          <option value="orderPrice 1">Precio Ascendente</option>
          <option value="orderPrice -1">Precio Descendente</option>
          <option value="orderPunctuations 1">Rating Ascendente</option>
          <option value="orderPunctuations -1">Rating Descendente</option>
          <option value="orderTitle 1">Nombre Ascendente</option>
          <option value="orderTitle -1">Nombre Descendente</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
