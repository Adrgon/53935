
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]

let ingreso = prompt("Ingresar el mes")


/* meses.forEach( mes => {
    if(mes === ingreso){
        console.log(ingreso + " existe")
    }
}) */

/* const resultado = meses.includes(ingreso);
console.log(resultado); */

const existe = meses.some( mes => mes.toLowerCase() === ingreso.toLowerCase());
console.log(existe)
console.log(meses)
