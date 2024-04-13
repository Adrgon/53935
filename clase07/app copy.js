//alert()

/* const hacerAlgo = function(){
    console.log("hola")
}

hacerAlgo(); */


/* const hacerAlgo =  () => {
  console.log("hola");
};

hacerAlgo(); */

/* 
let nombre = prompt("Ingresar nombre")

const saludar = (nombre)=>{
    const res = {nombre: nombre}
    return res;
}

console.log(saludar(nombre)) 
*/


// Las HOF son las funciones que pueden recibir una funcion como paramtro o devolver o retornar una funcion


// Funciones como parametro

/* const sumar = (a, b) => a + b

const multiplicar = (a, b) => a * b;

const sumarOMultiplicar = (fn) => fn(6, 8);  // HOF */


//console.log(sumarOMultiplicar(sumar))
//console.log(sumarOMultiplicar(multiplicar))

//console.log(sumarOMultiplicar((a, b)=> b-a))



// Funcion de orden superior HOF que retorna una Funcion

const crearFuncionSaludo = (saludo) => {

    const funcionSaludo = (nombre) => {
        console.log(saludo + ', ' + nombre)
    }

    return funcionSaludo;
}

const saludoEnEspanol = crearFuncionSaludo('Hola')
const saludoEnIngles = crearFuncionSaludo("Hello");

saludoEnEspanol('Carlos');
saludoEnIngles('Charles');
