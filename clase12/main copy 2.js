const producto = {
  nombre: "TV",
  precio: 3000,
  disponible: true,
  colores: ["rojo", "verde", "azul"],
  informacion: {
    peso: "7kg",
    altura: "45cm",
  },
};

const usuario = {
    nombre: "Leonardo",
    edad: 48,
}


/* console.log(producto.nombre)
console.log(producto["nombre"])

let nombre = producto.nombre;

let info = producto.informacion.peso
console.log(info)
 */

let nombre = "Adrian";

let {nombre: nombreProducto, precio, disponible, informacion : {peso}} = producto;

let {nombre: nombreUsuario} = usuario


//let usuarios = [{usr: "Bruno"},{usr: "Maria"},{}]

/* console.log(nombre)
console.log(nombreProducto);
console.log(precio);
console.log(nombreUsuario)
console.log(peso) */


function imprimirDatos({nombre, precio}){
    //let {nombre, precio} = item
    document.body.innerHTML = `<h1>El producto ${nombre} cuesta ${precio}</h1>`; 
}

imprimirDatos(producto);
