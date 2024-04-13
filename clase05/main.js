console.log("-------- Clases --------------------");

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  calcularImpuesto() {
    return this.precio * 1.21;
  }
}

let tv = new Producto("TV 50 Pulgadas", 500000);

console.log(tv);

let totalPagar = tv.calcularImpuesto();

console.log("El total a pagar con inpuesto " + totalPagar);

console.log("----------------------------");

let playStation = new Producto("PlayStation 5", 1000000);

console.log(playStation);

let totalPagar2 = playStation.calcularImpuesto();

console.log("El total a pagar con inpuesto " + totalPagar2);


console.log("---------------")

let heroe = {
  nombre: "Bruno Dias",
  alterEgo: "Batman",
  superPoder: "Dinero",
  vive: false,
};

console.log("fuerza" in heroe);
console.log("nombre" in heroe)


for(let prop in heroe){
    console.log(prop);
}


for (let prop in heroe) {
  console.log(heroe[prop]);
}
