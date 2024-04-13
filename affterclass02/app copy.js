//console.log("hola")

/* 
Seis tipos de datos primitivos

- Undefined
- Boolean
- Number
- String
- BigInt
- Symbol
- Null
*/

let instancia;
console.log(instancia);
console.log(typeof instancia)

instancia = null
console.log(instancia)
console.log(typeof instancia)

instancia = true;
console.log(instancia);
console.log(typeof instancia);

instancia = 10;
console.log(instancia);
console.log(typeof instancia);

instancia = "10";
console.log(instancia);
console.log(typeof instancia);


/* 
- Object --> Punteros --> Evolucionados
new Object
new Array
new Map
new Set
new WeakMap
nes WeakSet
nes Date
function
*/

let obj = new Object()
console.log(obj)
console.log(typeof obj)

let arr = new Array();
console.log(arr);
console.log(typeof arr);

let miFuncion = function(){}
console.log(miFuncion)
console.log(typeof miFuncion)
