interface Elemento {
    id: number;
    nombre: string;
    descripcion: string;
  }
  
  const elementos: Elemento[] = [
    { id: 1, nombre: 'Elemento 1', descripcion: 'Descripción del elemento 1' },
    { id: 2, nombre: 'Elemento 2', descripcion: 'Descripción del elemento 2' },
    { id: 3, nombre: 'Elemento 3', descripcion: 'Descripción del elemento 3' },
    { id: 4, nombre: 'Elemento 4', descripcion: 'Descripción del elemento 4' },
    { id: 5, nombre: 'Elemento 5', descripcion: 'Descripción del elemento 5' },
    { id: 6, nombre: 'Elemento 6', descripcion: 'Descripción del elemento 6' },
    { id: 7, nombre: 'Elemento 7', descripcion: 'Descripción del elemento 7' },
    { id: 8, nombre: 'Elemento 8', descripcion: 'Descripción del elemento 8' },
    { id: 9, nombre: 'Elemento 9', descripcion: 'Descripción del elemento 9' },
    { id: 10, nombre: 'Elemento 10', descripcion: 'Descripción del elemento 10' },
    { id: 11, nombre: 'Elemento 11', descripcion: 'Descripción del elemento 11' },
    { id: 12, nombre: 'Elemento 12', descripcion: 'Descripción del elemento 12' },
    { id: 13, nombre: 'Elemento 13', descripcion: 'Descripción del elemento 13' },
    { id: 14, nombre: 'Elemento 14', descripcion: 'Descripción del elemento 14' },
    { id: 15, nombre: 'Elemento 15', descripcion: 'Descripción del elemento 15' }
  ];
  
  const ELEMENTOS_POR_PAGINA = 5;
  
  function obtenerPaginaDeElementos(elementos: Elemento[], numeroPagina: number) {
    const indiceInicial = (numeroPagina - 1) * ELEMENTOS_POR_PAGINA;
    const indiceFinal = indiceInicial + ELEMENTOS_POR_PAGINA;
    return elementos.slice(indiceInicial, indiceFinal);
  }
  
  let paginaActual = 1;
  const elementosActuales = obtenerPaginaDeElementos(elementos, paginaActual);
  
  console.log(`Página ${paginaActual}:`, elementosActuales);
  
  // Cambiar a la página siguiente
  paginaActual++;
  const elementosSiguientes = obtenerPaginaDeElementos(elementos, paginaActual);
  
  console.log(`Página ${paginaActual}:`, elementosSiguientes);
  