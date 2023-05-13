
function Filter (){
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

// Función para ordenar por precio de menor a mayor
function sortByPriceAsc(items: Item[]): Item[] {
  return items.sort((a, b) => a.price - b.price);
}

// Función para ordenar por precio de mayor a menor
function sortByPriceDesc(items: Item[]): Item[] {
  return items.sort((a, b) => b.price - a.price);
}


// Función para ordenar por nombre 
function sortByNameDesc(items: Item[]): Item[] {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}


return (
 
  <div className="seccion">
<div className="filtro">
  <h2>Filtro</h2>
  <ul>
    <li>Nombre</li>
    <li>Precio ascendente</li>
    <li>Precio descendente</li>
  </ul>
</div>

<div className="categoria">
  <h2>Categoría</h2>
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
      
)

// Ejemplo de uso
console.log("Orden ascendente:");
console.log(sortByPriceAsc(items));

console.log("Orden descendente:");
console.log(sortByPriceDesc(items));
}

export default Filter;