console.log("-----Copia por valor---------------");
// copia por valor
let a = 10;
let b = a;

console.log(a); // 10
console.log(b); // 10

console.log("--------------------");

a = 5;
console.log(a); // 5
console.log(b); // 10


console.log("--------------------");

let obj1 = {x: 5}
let obj2 = obj1;

console.log(obj1.x) // 5
console.log(obj2.x) // 5

console.log("--------------------");

obj1.x = 10
console.log(obj1.x); // 10
console.log(obj2.x); // 5


/* 
let producto = {nombre: "pelota", precio: 20000} // #00ff552217

producto = {nombre: "zpatillla", precio: 50000} // #0022552222 
*/


/* const producto = {nombre: "pelota", precio: 20000} // #00ff552217

producto = {nombre: "zpatillla", precio: 50000} // #0022552222 */

const producto = {nombre: "pelota", precio: 20000} // #00ff552217
console.log(producto);

producto.precio = 25000; // #00ff552217

console.log(producto)


const saludar = function(){
    console.log("Hola mundo")
}

const saltar =  () => {
  console.log("Hola mundo");
};
