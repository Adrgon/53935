//console.log(Math)
let resultado;

resultado = Math.PI
// redondeo
resultado = Math.round(2.3);
// redondeo arriba
resultado = Math.ceil(2.9999)
// redondeo abajo 
resultado = Math.floor(2.00001)

resultado = parseInt(2.9999)

resultado = Math.sqrt(144)

resultado = Math.abs(-300)

resultado = Math.pow(8, 3);

resultado = 8**5
//let arr = [3, 5, 33, 4];
resultado = Math.min(3, 5, 33, 4);
resultado = Math.max(3,5,33,4)


resultado = Math.floor(Math.random()*100)

resultado = Math.ceil(Math.random() * 6); // dado

resultado = Math.floor(Math.random() * 2); // moneda

if(resultado == 0){
    document.write(
      "<img src='https://m.media-amazon.com/images/I/71Zj7plR67L.png' />"
    );
}else {
    document.write(
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLi5EwC7gVLC8E8TQomlqM1-sAAHMpOqOAQ&usqp=CAU' />"
    );
}

console.log(resultado);
