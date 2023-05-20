import styles from "./filter.module.scss"
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Filter: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  let minP = "0", maxP = "5000", minR = "0", maxR = "5";

  const [orderBy, setOrderBy] = useState<'price' | 'name' | ''>(searchParams.get('order') as 'price' | 'name' || '');
  const [category, setCategory] = useState<string>(searchParams.get('category') || '');
  const [minPrice, setMinPrice] = useState<string>(searchParams.get('minPrice') ?? minP);
  const [maxPrice, setMaxPrice] = useState<string>(searchParams.get('minPrice') ?? maxP);
  const [minRating, setMinRating] = useState<string>(searchParams.get('minPrice') ?? minR);
  const [maxRating, setMaxRating] = useState<string>(searchParams.get('minPrice') ?? maxR);

  useEffect(() => {
    if (orderBy !== '') searchParams.set('order', orderBy);
    if (category !== '') searchParams.set('category', category);

    if (minPrice !== minP || maxPrice !== maxP) {
      searchParams.set('minPrice', minPrice.toString());
      searchParams.set('maxPrice', maxPrice.toString());
    }

    if (minRating !== minR || maxRating !== maxR) {
      searchParams.set('minRating', minRating.toString());
      searchParams.set('maxRating', maxRating.toString());
    }

    navigate({ search: searchParams.toString() });
  }, [orderBy, category]);

  const handleOrderByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrderBy = event.target.value as 'price' | 'name' | '';
    setOrderBy(selectedOrderBy);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const searchParams = new URLSearchParams();

    if (orderBy !== '') searchParams.set('order', orderBy);
    if (category !== '') searchParams.set('category', category);

    if (minPrice !== minR || maxPrice !== maxP) {
      searchParams.set('minPrice', minPrice.toString());
      searchParams.set('maxPrice', maxPrice.toString());
    }

    if (minRating !== minR || maxRating !== maxR) {
      searchParams.set('minRating', minRating.toString());
      searchParams.set('maxRating', maxRating.toString());
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
        <label>Min Price ({minPrice})</label>
        <input type="range" min={0} max={maxP} value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <label>Max Price ({maxPrice})</label>
        <input type="range" min={0} max={maxP} value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        <br />

        <label>Min Rating ({minRating})</label>
        <input type="range" min={0} max={maxR} value={minRating} onChange={(e) => setMinRating(e.target.value)} />
        <label>Max Rating ({maxRating})</label>
        <input type="range" min={0} max={maxR} value={maxRating} onChange={(e) => setMaxRating(e.target.value)} />
        <br />
        <button type="submit" >
          Submit
        </button>
      </form>

    </div>
  );
};








//   const dispatch: any = useDispatch();
//   const navigate = useNavigate();
//   const [paramsUrl] = useSearchParams();
//   let minP = "0", maxP = "5000", minR = "0", maxR = "5";

//   const [params] = useSearchParams();
//   const search = params.get("search") || "";

//   const [myQuery, setMyQuery] = useState({
//     order: "",
//     category: "",
//     minPrice: minP,
//     maxPrice: maxP,
//     minRating: minR,
//     maxRating: maxR,
//   })

//   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const { value } = event.target;
//     let orden = value.split(" ")[0];
//     let type = value.split(" ")[1]
//     setMyQuery({ ...myQuery, [orden]: type })
//   };

//   const handleMinMaxSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const form = event.target as HTMLFormElement;
//     const minPrice = form.elements['minPrice'].value;
//     const maxPrice = form.elements['maxPrice'].value;
//     const minRating = form.elements['minRating'].value;
//     const maxRating = form.elements['maxRating'].value;

//     setMyQuery({ ...myQuery, minPrice: minPrice, maxPrice: maxPrice, minRating: minRating, maxRating: maxRating })
//   };


//   return (
//     <div className="seccion">
//       <div className="filtro">
//         <h4>Orden</h4>
//         <select name="order" onChange={handleChange} className="filtrp-select">
//           <option className="option" value="">Default</option>
//           <option className="option" value="order price">Precio Ascendente</option>
//           <option className="option" value="order -price">Precio Descendente</option>
//           <option className="option" value="order punctuations">Rating Ascendente</option>
//           <option className="option" value="order -punctuations">Rating Descendente</option>
//           <option className="option" value="order title">Nombre Ascendente</option>
//           <option className="option" value="order -title">Nombre Descendente</option>
//         </select>

//         <select name="filterCat" onChange={handleChange}>
//           <option value="">All</option>
//           <option value="category Technology">Tecnología</option>
//           <option value="category Indumentary">Ropa</option>
//           <option value="category Furniture">Muebles</option>
//           <option value="category Others">Otros</option>
//         </select>

//         <form onSubmit={handleMinMaxSubmit}>
//           <label htmlFor="minPrice">Min Price ({myQuery.minPrice}):</label>
//           <input name="minPrice" defaultValue={minP} min={minP} max={maxP} type="range" />

//           <label htmlFor="maxPrice">Max Price ({myQuery.maxPrice}):</label>
//           <input name="maxPrice" defaultValue={maxP} min={minP} max={maxP} type="range" />

//           <label htmlFor="minRating">Min Rating ({myQuery.minRating}):</label>
//           <input name="minRating" defaultValue={minR} min={minR} max={maxR} type="range" />

//           <label htmlFor="maxRating">Max Rating ({myQuery.maxRating}):</label>
//           <input name="maxRating" defaultValue={maxR} min={minR} max={maxR} type="range" />

//           <button type="submit">Filtrar</button>
//         </form>
//       </div>
//     </div>
//   );
// };

export default Filter;
