import "./filter.scss";
import redux from "redux";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderProducts } from "../../redux/actions/productActions.";

/*const Filter: React.FC = () => {
  type Item = {
    name: string;
    price: number;
  };

  const items: Item[] = [
    { name: "A", price: 10 },
    { name: "B", price: 5 },
    { name: "C", price: 20 },
    { name: "D", price: 15 },
  ];

  const sortByPriceAsc = (items: Item[]): Item[] => {
    return items.slice().sort((a, b) => a.price - b.price);
  };

  const sortByPriceDesc = (items: Item[]): Item[] => {
    return items.slice().sort((a, b) => b.price - a.price);
  };

  const sortByNameDesc = (items: Item[]): Item[] => {
    return items.slice().sort((a, b) => a.name.localeCompare(b.name));
  };

  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  const handleFilterSelection = (filter: string) => {
    let sortedItems: Item[];

    switch (filter) {
      case 'name':
        sortedItems = sortByNameDesc(items);
        break;
      case 'priceAsc':
        sortedItems = sortByPriceAsc(items);
        break;
      case 'priceDesc':
        sortedItems = sortByPriceDesc(items);
        break;
      default:
        sortedItems = items;
        break;
    }

    setFilteredItems([...sortedItems]);
  };
*/
const Filter: React.FC = () => {
  const dispatch: any = useDispatch();
  function handleclick(e: any) {
    //console.log(e.target.id);
    dispatch(orderProducts(e.target.id));
  }
  return (
    <div className="seccion">
      <div className="filtro">
        <h4>Filtros</h4>
        <ul>
          <li id="mayor" onClick={handleclick}>
            Precio ascendente
          </li>
          <li id="menor" onClick={handleclick}>
            Precio descendente
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
