let nombre = "Maria"  // variable global

function saludar(){
    let apellido = "Becerra"
    nombre = "Juan";
    console.log("hola " + nombre + " " + apellido)
    
    return apellido
}


//console.log(apellido);




let resultado = saludar();
console.log(resultado);

//console.log(apellido)

/* for(let i=0; i<5; i+=1){
    console.log(i)
}

console.log(i) */
