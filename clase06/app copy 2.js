const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

for(let i=0; i<meses.length; i+=1){
    console.log(meses[i])
}


// Agregar elemento a un array
console.log('-----push----')
meses.push("Julio") // agregar un elemento a lista, lo agrega al final.

for (let i = 0; i < meses.length; i += 1) {
  console.log(meses[i]);
}



console.log("-----shift----");
meses.shift(); //.

for (let i = 0; i < meses.length; i += 1) {
  console.log(meses[i]);
}

console.log("-----unshift----");
meses.unshift("Enero"); //.

for (let i = 0; i < meses.length; i += 1) {
  console.log(meses[i]);
}

console.log("-----pop----");
meses.pop(); //.

for (let i = 0; i < meses.length; i += 1) {
  console.log(meses[i]);
}


let nombres = ["German", "Bruno", "Miguel", "Liliana", "Rosana"]

nombres.splice(1)
console.log(nombres);

nombres = ["German", "Bruno", "Miguel", "Liliana", "Rosana"];

console.log(nombres);

//console.log(nombres.join(" - "));
let res = nombres.join(" - ");
console.log(res)
console.log(typeof nombres.join(' - '))
console.log(nombres);


let hombres = ["Agustin", "Daniel", "Estanislao"];
let mujeres = ["Romina", "Marta", "Maria"];

const todos = hombres.concat(mujeres);
console.log(todos)
console.log(hombres)
console.log(mujeres)


console.log("----- Slice ----------")
//const algunos = todos.slice(1, 3)
//console.log(algunos)
//console.log(todos)
const names = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

const masculinos = names.slice(1, 3)
console.log(masculinos)
console.log(names)
