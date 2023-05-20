import styles from "./filter.module.scss";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { selectPage } from "../../redux/actions/productActions.";

const Filter: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  let minP = "0",
    maxP = "5000",
    minR = "0",
    maxR = "5";

  const [orderBy, setOrderBy] = useState<"price" | "name" | "">(
    (searchParams.get("order") as "price" | "name") || ""
  );
  const [category, setCategory] = useState<string>(
    searchParams.get("category") || ""
  );
  const [minPrice, setMinPrice] = useState<string>(
    searchParams.get("minPrice") ?? minP
  );
  const [maxPrice, setMaxPrice] = useState<string>(
    searchParams.get("maxPrice") ?? maxP
  );
  const [minRating, setMinRating] = useState<string>(
    searchParams.get("minRating") ?? minR
  );
  const [maxRating, setMaxRating] = useState<string>(
    searchParams.get("maxRating") ?? maxR
  );

  useEffect(() => {
    searchParams.set("index", "0");
    dispatch(selectPage(0));

    if (orderBy === "") searchParams.delete("order");
    else searchParams.set("order", orderBy);
    if (category === "") searchParams.delete("category");
    else searchParams.set("category", category);

    if (minPrice !== minP || maxPrice !== maxP) {
      searchParams.set("minPrice", minPrice.toString());
      searchParams.set("maxPrice", maxPrice.toString());
    }

    if (minRating !== minR || maxRating !== maxR) {
      searchParams.set("minRating", minRating.toString());
      searchParams.set("maxRating", maxRating.toString());
    }

    navigate({ search: searchParams.toString() });
  }, [orderBy, category]);

  const handleOrderByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrderBy = event.target.value as "price" | "name" | "";
    setOrderBy(selectedOrderBy);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const searchParams = new URLSearchParams(location.search);

    // if (orderBy !== '') searchParams.set('order', orderBy);
    // if (category !== '') searchParams.set('category', category);

    if (minPrice !== minR || maxPrice !== maxP) {
      searchParams.set("minPrice", minPrice.toString());
      searchParams.set("maxPrice", maxPrice.toString());
    }

    if (minRating !== minR || maxRating !== maxR) {
      searchParams.set("minRating", minRating.toString());
      searchParams.set("maxRating", maxRating.toString());
    }

    navigate({ search: searchParams.toString() });
  };

  return (
    <div>
      <form className={styles.contForm}>
        <label>Ordenar por: </label>
        <select value={orderBy} onChange={handleOrderByChange}>
          <option value="">Ninguno</option>
          <option value="price">Precio Ascendente</option>
          <option value="-price">Precio Descendente</option>
          <option value="title">Nombre Ascendente</option>
          <option value="-title">Nombre Descendente</option>
          <option value="punctuations">Rating Ascendente</option>
          <option value="-punctuations">Rating Descendente</option>
        </select>

        <br />
        <label> Categoría:</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Ninguno</option>
          <option value="Technology">Tecnología</option>
          <option value="Indumentary">Ropa</option>
          <option value="Furniture">Muebles</option>
          <option value="Others">Otros</option>
        </select>
      </form>
      <br />
      <form onSubmit={handleSubmit} className={styles.contForm}>
        <label>Precio mínimo ({minPrice})</label>
        <input
          type="range"
          min={0}
          max={maxP}
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <label>Precio máximo ({maxPrice})</label>
        <input
          type="range"
          min={0}
          max={maxP}
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <br />

        <label>Rating minimo ({minRating})</label>
        <input
          type="range"
          min={0}
          max={maxR}
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
        />
        <label>Rating máximo ({maxRating})</label>
        <input
          type="range"
          min={0}
          max={maxR}
          value={maxRating}
          onChange={(e) => setMaxRating(e.target.value)}
        />
        <br />
        <button type="submit">Filtros max y min</button>
      </form>
    </div>
  );
};

export default Filter;
