//alert()

let variable = "Esto es una variable";
const CONSTANTE = "ESTO ES UNA CONSTANTE";

// solo la definicion de la funcion
function sumar() {
    console.log(2+2);
}

//Ejecucion
sumar();

// funcion anonima
/* 
function(){
    console.log(" Hola Coder`s ")
} 
*/

// IIFE
(function(){
    console.log(" Hola Coder`s ")
})(); 


// functiones de expresion 
let resta = function () {
  console.log(10-5);
}; 

resta();
resta();
resta();
resta();
sumar();
resta();


console.log("-------------")

let saludo = () => {
  console.log("Hola Coders");
}; 

saludo()
