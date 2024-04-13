//alert()
const arrVacio = [];
console.log(arrVacio);
console.log(typeof arrVacio);

const numeros = [10,25,3,40,5];
console.log(numeros);
console.log(typeof numeros);

const nombres = ["Santiago", "Lucas", "German" ]
console.log(nombres);
console.log(typeof nombres);

const mixtos = ["Pelota", true, {numero: 5, precio: 34000}, 300, numeros, []]
console.log(mixtos)
console.log(typeof mixtos);

const ensalada = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
//console.log(ensalada.length) // 7


/* const cadena = "Electroencefaligrafista";
console.log(cadena.length) // 23

console.log("Adrian".length) // 

console.log("🍅".length) // 
console.log("👨‍👩‍👧‍👦".length) //  */


//console.log(arrVacio);
//console.log({})

// como se consulta la longitud de un arrar
console.log(ensalada.length)
console.log(ensalada)

console.log(ensalada[0]) // primer elmento
console.log(ensalada[ensalada.length - 1]) // resolucion de forma programatica


console.table(ensalada);

/* for(let i = 0; i<7; i+=1){
    console.log(ensalada[i])
} */


for (let i = 0; i < ensalada.length; i += 1) {
  console.log(ensalada[i]);
}

/* 
let obj = {x: 200, y: 500, }

console.log(obj.x) 
*/

//console.log([])
