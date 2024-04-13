let metodoPago = prompt("Metodo de Pago")

switch (metodoPago) {
    case 'efectivo':
        console.log("Pagaste en efectivo");
        break;
    case 'cheque': 
        console.log("Pagaste en Cheque");
        break;
    case 'tarjeta':
        console.log("Pagaste en tarjeta");
        break;
    case 'criptomonedas':
        console.log("Pagaste en criptomonedas");
        break;
    default:
        console.log("No se acepta " + metodoPago +  " como metodo de pago");

}
