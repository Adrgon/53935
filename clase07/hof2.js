// Funciones como retorno

function mayorQue(n) {
  return function (m) {
    return m > n;
  };
}

let mayorQueDiez = mayorQue(10);
console.log(mayorQueDiez);

console.log(mayorQueDiez(12)); //  true
console.log(mayorQueDiez(8)); //  false

/* const saludar = () => { console.log(hola)}
//saludar() // la ejecucion de la funcio --> hola
console.log(saludar)  // una funcion */
