// Las HOF son las funciones que pueden recibir una funcion como paramtro o devolver o retornar una funcion

// Funciones como parametro

const sumar = (a, b) => a + b;

const multiplicar = (a, b) => a * b;

const sumarOMultiplicar = (fn) => fn(6, 8); // HOF

//console.log(sumarOMultiplicar(sumar))
//console.log(sumarOMultiplicar(multiplicar))

//console.log(sumarOMultiplicar((a, b)=> b-a))
