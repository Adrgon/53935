//alert()

let nombre = "Diego";
let edad = 7;
let patas = 5;


// Empleado _ Entidad
let nombreEmpleado = "Agustin";
let edadEmpleado = 27;
let legajo = 123654;

let xxx = "Adrian";
let vvv = 48;
let sysy = 234543;


// Definicion de un objeto
let producto = {}; // Nombre tecnico "objeto literal" y ademas esta vacio
console.log(producto); 
console.log(typeof producto) // tipo de dato es object

// objetos son un conjunto de datos que corresponde a una entidad.
let heroe = {
    nombre: "Bruno Dias",
    alterEgo: "Batman",
    superPoder: "Dinero",
    vive: false,
}

let heroe1 = {
    nombre: "Clark Kent",
    alterEgo: "Superman",
    superPoder: "Vuela",
    vive: true
}

console.log(heroe.superPoder);
//console.log(heroe1);

//alert(heroe);
//document.write(heroe);


//alert(heroe.nombre);
//alert(heroe.superPoder)

//alert("Mi nombre es " + heroe.nombre + " y mi super pode es " + heroe.superPoder);
//alert("Mi nombre es " + heroe["nombre"] + " y mi super pode es " + heroe["superPoder"]);

heroe.superPoder = "Cinturon";
console.log(heroe.superPoder)

heroe.enemigo = "Joker";
console.log(heroe);


/* 
let varios = []; // Nombre tecnico es 'array'
console.log(varios); 
console.log(typeof varios) // tipo de dato es object
 */
//console.log(window);
//console.log(this);
