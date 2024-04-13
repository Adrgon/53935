const names = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

/* let respuesta = names.indexOf("Rita")
console.log(respuesta)
console.log(names[respuesta])

respuesta = names.indexOf('Ana')
console.log(respuesta);
console.log(names[respuesta]);

respuesta = names.indexOf("Julieta");
console.log(respuesta);
if(respuesta == -1){
    console.log("Persona no encontrada");
}


console.log('----includes-----')
respuesta = names.includes("Rita");
console.log(respuesta);
//console.log(names[respuesta]);

respuesta = names.includes("Ana");
console.log(respuesta);
//console.log(names[respuesta]);
respuesta = names.includes("Julieta");
console.log(respuesta);
 */

/* for(let i=0; i<names.length; i+=1){
    console.log(names[i])
} */

/* for(let name of names){
    console.log(name)
} */

const productos = [
  { id: 1, nombre: "Arroz" },
  { id: 2, nombre: "Fideo" },
  { id: 3, nombre: "Pan" },
];

/* for(let i=0; i<productos.length; i+=1){
    console.log(productos[i].id + " " + productos[i].nombre)
}  */


 for(let item of productos){
    console.log(item.id + " " + item.nombre)
} 
