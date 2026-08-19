let productos = [];

// Agregar productos
productos.push("Laptop");
productos.push("Mouse");
productos.push("Teclado");
productos.push("Monitor");

// Enlistar productos
console.log("Lista de productos:");

productos.forEach(function(producto) {
    console.log("- " + producto);
});