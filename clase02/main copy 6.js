let efectivo = 3000;
let credito = 4000;

let disponible = efectivo + credito;
console.log(disponible);
let totalCompra = 7000;

if(efectivo >= totalCompra || credito > totalCompra){
    console.log("Puede pagar con efectivo o tarjeta")
}else if( disponible >= totalCompra) {
    console.log("Puede pagar combinando efectivo y tarjeta")
}else {
    console.log("no puedo pagar")
}
// El resultado de la primera operacion false
// El resultado de la segunda operacion false



