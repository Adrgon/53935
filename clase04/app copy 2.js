//alert()

// Definicion de funcion

function miRutinaSemana(){
    console.log("Dormir");
    console.log("Dspertar");
    console.log("Higienizarse");
    console.log("vestirse")
    console.log("Desayunar");
    console.log("Ir al trabajo");
    console.log("comer");
    console.log("seguir trabajando")
    console.log("volver a casa")
    console.log("comer");
    console.log("---------------------")
}

function miRutinaFinDeSemana() {
  console.log("futbol")
  console.log("---------------------");
}

let dia = prompt("Dia de la semana")

switch(dia){
    case "sabado": 
        miRutinaFinDeSemana();
        break;
    case "somingo":
        miRutinaFinDeSemana()
        break;
    default:
        miRutinaSemana()
}
