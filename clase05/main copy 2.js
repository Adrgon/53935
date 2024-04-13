/* 
let auto1 = {
    marca: "fiat",
    modelo: "Cronos"
}

let auto2 = {
  marca: "Ford",
  modelo: "Fiesta",
}; 
*/

function Heroe(n, a, s, x){
    this.nombre = n;
    this.alterEgo = a;
    this.superPoder = s;
    this.vive = x
    this.bando = "Bueno"
}

const super1 = new Heroe("Diana Prince", "Mujer Maravilla", "lazo de verdad", true);
const super2 = new Heroe("Barbara Gordon", "Batichica");
const super3 = new Heroe("Jack", "Guason", "Loco", false);

console.log(super1);
console.log(super2);
console.log(super3);
