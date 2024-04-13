//forEach
//map
//some
// findindex
// reduce
// filter
// find

const carrito = [
  { id: 1, nombre: "Zapatos", precio: 500 },
  { id: 2, nombre: "Camisa", precio: 700 },
  { id: 3, nombre: "Chomba", precio: 300 },
  { id: 4, nombre: "Remera", precio: 200 },
  { id: 5, nombre: "Musculosa", precio: 500 },
  { id: 6, nombre: "medias", precio: 50 },
  { id: 7, nombre: "Gorra", precio: 300 },
  { id: 8, nombre: "Campera", precio: 800 },
];

/* let resutado = carrito.filter(item => item.precio > 800);
let resultado1 = carrito.filter(item => item.nombre === 'Remera')

let nuevoCarrito = carrito.filter(item => item.id !== 1) // todos menos Zapatos

let res = carrito.filter( item =>  item.precio > 200 && item.precio < 500)

console.log(res);
 */

/* let resultado = '';
carrito.forEach((item, index) => {
    if(item.nombre === "Gorra") {
        resultado = carrito[index]
    }
})

console.log(resultado)


let res = carrito.find( item => item.nombre = "Gorra")
console.log(res); */

/* function hacerAlgo(item){
    return item
}

const hacerAlgo = (item)  => item
 */

/* let cumple = true;

carrito.forEach( item => {
    if(item.precio > 700) {
        cumple = false
        return 
    }
}) */

//console.log(cumple);

const resultado = carrito.every((item) => item.precio < 801);
console.log(resultado);
