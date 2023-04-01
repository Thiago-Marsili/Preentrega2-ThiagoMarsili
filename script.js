// Definimos un objeto de película
const celulares = [
    {
      marca: "Samsung",
      modelo: "Galaxy S21",
      precio: 300000
    },
    {
      marca: "Apple",
      modelo: "iPhone 13",
      precio: 600000
    },
    {
      marca: "Xiaomi",
      modelo: "Mi 11",
      precio: 250000
    },
    {
      marca: "OnePlus",
      modelo: "9 Pro",
      precio: 200000
    },
    {
      marca: "Google",
      modelo: "Pixel 6",
      precio: 198000
    }
  ];
  
  let carrito = [];
  
  function mostrarCelulares() {
    let celularesDisponibles = "Estos son los celulares disponibles: \n\n";
    for (let i = 0; i < celulares.length; i++) {
      celularesDisponibles += `${i + 1}. ${celulares[i].marca} ${celulares[i].modelo} - $${celulares[i].precio}\n`;
    }
    alert(celularesDisponibles);
  }
  
  function filtrarPorMarca() {
    let marcaElegida = prompt("Ingrese la marca que busca (Samsung/Apple/Xiaomi/OnePlus/Google)").toLowerCase();
    let celularesFiltrados = celulares.filter(celular => celular.marca.toLowerCase() === marcaElegida);
    let celularesDisponibles = "Estos son los celulares disponibles: \n\n";
    for (let i = 0; i < celularesFiltrados.length; i++) {
      celularesDisponibles += `${i + 1}. ${celularesFiltrados[i].marca} ${celularesFiltrados[i].modelo} - $${celularesFiltrados[i].precio}\n`;
    }
    alert(celularesDisponibles);
  }
  
  function agregarAlCarrito() {
    let celularElegido = prompt("Ingrese el número del celular que desea agregar al carrito");
    let celular = celulares[parseInt(celularElegido) - 1];
    carrito.push(celular);
    alert(`El celular ${celular.marca} ${celular.modelo} ha sido agregado al carrito`);
  }
  
  function mostrarCarrito() {
    let carritoActual = "Estos son los celulares en tu carrito: \n\n";
    for (let i = 0; i < carrito.length; i++) {
      carritoActual += `${i + 1}. ${carrito[i].marca} ${carrito[i].modelo} - $${carrito[i].precio}\n`;
    }
    alert(carritoActual);
  }
  
  function menu() {
    let opcion = prompt("Seleccione una opción: \n\n1. Mostrar celulares disponibles \n2. Filtrar celulares por marca \n3. Agregar celular al carrito \n4. Mostrar carrito \n5. Salir");
    switch(opcion) {
      case "1":
        mostrarCelulares();
        break;
      case "2":
        filtrarPorMarca();
        break;
      case "3":
        agregarAlCarrito();
        break;
      case "4":
        mostrarCarrito();
        break;
      case "5":
        alert("Gracias por su visita");
        break;
      default:
        alert("Opción inválida. Seleccione una opción válida.");
        menu();
        break;
    }
  }
  
  while (true) {
    menu();
  }