function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;

    this.calcularImpuesto = function(){
        return this.precio * 1.21
    }
}

let tv = new Producto("TV 50 Pulgadas", 500000)

console.log(tv)

let totalPagar = tv.calcularImpuesto();

console.log("El total a pagar con inpuesto " + totalPagar);

console.log("----------------------------")

let playStation = new Producto("PlayStation 5", 1000000);

console.log(playStation);

let totalPagar2 = playStation.calcularImpuesto();

console.log("El total a pagar con inpuesto " + totalPagar2);

console.log("-------- Clases --------------------");
