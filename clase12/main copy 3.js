const numeros = [10,20,500,30,40,50,90];

/* const [primero, segundo,,,ultimo] = numeros

console.log(primero);
console.log(segundo)
console.log(ultimo) */

//const [primero, ,segundo, ...tercero] = numeros

//console.log(primero);
//console.log(segundo);
//console.log(tercero)

//console.log(Math.max(numeros));
//console.log(Math.max(10,20,30,40,50));
//console.log(Math.max(...numeros));
const meses1 = ["Enero", "Febrero", "Marzo"];
const meses2 = ["Abril", "Mayo", "Junio"];
const meses3 = ["Julio", "Agosto", "Septiembre"];
const meses4 = ["Octubre", "Noviembre", "Diciembre"]

//const semestre1 = meses1.concat(meses2)
//console.log(semestre1)

const semestre1 = [...meses1, ...meses2]
console.log(semestre1)

const catalogo = [
  { producto: "Zapatos", precio: 500 },
  { producto: "Camisa", precio: 700 },
  { producto: "Chomba", precio: 300 },
  { producto: "Remera", precio: 200 },
  { producto: "Musculosa", precio: 500 },
  { producto: "medias", precio: 50 },
  { producto: "Gorra", precio: 300 },
  { producto: "Campera", precio: 800 },
];

const nuevoProducto = {producto: "Botines", precio: 60000}

//const nuevoCatalogo = [nuevoProducto, ...catalogo]
const nuevoCatalogo = [...catalogo, nuevoProducto];

console.log(nuevoCatalogo)




const usuario1 = {
  nombre: "Juan",
  edad: 24,
  curso: "Javascript",
};

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario2 = {
  ...usuario1,
};

console.log(usuario2); // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

const usuario3 = {
  ...usuario1,
  curso: "ReactJS",
  email: "juan@doe.com",
};

console.log(usuario3);
