/* 
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6); 
*/


// Javascript tiene diferentes funciones

// algunas funciones se ejecutan de forma sincronica
// otrass funciones se ejecutan de forma asincronica

console.log(this)


/* setTimeout(()=>{
    console.log("Despertate")
},5000)
 */
function saludar(){
    console.log(2)
}


console.log(1);
setTimeout(saludar, 0)
console.log(3);
