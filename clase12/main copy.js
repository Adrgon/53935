

/* 
console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy */


let obj = null;
console.log(obj);
console.log(typeof obj)


let usr = {
    nombre: "Adrian",
    edad: 48
}

usr.apellido = "Gonzalez";


//console.log(usr.apellido)
console.log(usr?.apellido || "Falta el usuario")
