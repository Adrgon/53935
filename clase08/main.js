const diaHoy = new Date()
console.log(diaHoy)
console.log(Date.now())


let cumple = new Date('1-14-1976')
cumple = new Date('January 14 1976')
console.log(cumple);

console.log(typeof cumple)


let valor;
valor = diaHoy.getMonth()
valor = diaHoy.getDate();
valor = diaHoy.getDay();
valor = diaHoy.getFullYear();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();

valor = diaHoy.setFullYear(2018)


console.log(valor)
