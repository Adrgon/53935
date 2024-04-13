// primer array method que utiliza HOF
const numeros = [1,2,3,4,5,6]

// doble de un numero
const doble = (num) => num*2;
//console.log(doble(100))
console.log("-------- forEach ------------")
//numeros.forEach(doble);
//numeros.forEach((num) => console.log(num*2));
//console.log(numeros)

//const por2 = numeros.map(doble);
const por2 = numeros.map((num) => num * 2);
console.log(por2)
console.log(numeros)
const por100 = numeros.map((num) => num * 100);
console.log(por100);
console.log(numeros);

const nombres = ["Lautaro", "Daniel", "Tomas", "Alejandra"];

const longitudes = nombres.map(nombre => nombre.length)
console.log(longitudes);
console.log(nombres);

const catalogo = [
  { nombre: "Zapatos", precio: 500 },
  { nombre: "Camisa", precio: 700 },
  { nombre: "Chomba", precio: 300 },
  { nombre: "Remera", precio: 200 },
  { nombre: "Musculosa", precio: 500 },
  { nombre: "Medias", precio: 50 },
  { nombre: "Gorra", precio: 300 },
  { nombre: "Campera", precio: 800 },
];

const productConInpuesto = catalogo.map( item => ({nombre: item.nombre, precio: item.precio, precio_final: item.precio*1.21}))
console.log(productConInpuesto)


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]

meses.forEach( mes => {
    if(mes === 'Enero'){
        console.log("Enero existe")
    }
})
