import './filter.scss';
import axios from 'axios';
import React, { useState } from 'react';

const Filter: React.FC = () => {
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

  return (
    <div className="seccion">
      <div className="filtro">
        <h4>Filtros</h4>
        <ul>
          <li onClick={() => handleFilterSelection('name')}>Nombre</li>
          <li onClick={() => handleFilterSelection('priceAsc')}>Precio ascendente</li>
          <li onClick={() => handleFilterSelection('priceDesc')}>Precio descendente</li>
        </ul>
      </div>

      <div className="categoria">
        <h4>Categorías</h4>
        <ul>
          <li>Videojuegos</li>
          <li>Ropa</li>
          <li>Electrónica</li>
          <li>Teléfonos</li>
          <li>Computadoras</li>
          <li>Deportes</li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;

