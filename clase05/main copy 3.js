let producto = {
    nombre: "TV",
    precio: 300000,
    stock: 50,
    descripcion: "Este es un SmartTV marca Samsung",
    imprimir: function(){
        console.log(this.nombre + " Tienen un precio de " + this.precio );
    }
}

console.log("adrian".toUpperCase());
//alert("hola")

//console.log(7.toUpperCase())
producto.imprimir()


function aa(){
    console.log("aa")
}

//window.aa()
