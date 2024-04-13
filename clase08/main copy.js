//forEach
//map
//some
// findindex
// reduce

const carrito = [
  { nombre: "Zapatos", precio: 500 },
  { nombre: "Camisa", precio: 700 },
  { nombre: "Chomba", precio: 300 },
  { nombre: "Remera", precio: 200 },
  { nombre: "Musculosa", precio: 500 },
  { nombre: "medias", precio: 50 },
  { nombre: "Gorra", precio: 300 },
  { nombre: "Campera", precio: 800 },
];

const existe = carrito.some( ( item )=> item.precio >=1000)
console.log(existe)


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

const resultado = meses.includes('Agosto')
console.log(resultado)

const existencia = meses.some( mes => mes === 'Febrero' )
console.log(existencia);

meses.forEach( (mes, i)=> {
    if(mes === 'Diciembre'){
        console.log("Encontrdo en el indice " + i);
    }
})

//const indice = meses.findIndex( mes => mes === 'Octubre')

//console.log(indice);

if(meses.findIndex((mes) => mes === "Octubre") == -1){
    console.log("El mes que estas buscando no se encuenta en la grilla");
}


let res = carrito.reduce((total, item ) => total + item.precio ,0)
console.log(res);



let total = 0;
carrito.forEach( item => total += item.precio);
console.log(total)
