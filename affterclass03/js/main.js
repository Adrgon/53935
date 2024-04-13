// funcioalidad de busqueda (Avanzado)
// Pedir datos mediante propmpt y cargar un array
// Crear objetos de una misma clase
// pedir por prompt un id eliminarlo


let marca = prompt("Ingresar Marca")
let year = Number(prompt("Ingresar Año"))
let minimo = Number(prompt("Valore Minimo"));
let maximo = Number(prompt("Valore Minimo"))

const datosBusqueda = {
  marca: marca,
  year: year,
  minimo: minimo,
  maximo: maximo,
  puertas: 4,
};

function mostrarAutos(cars){
    //console.log(cars)
    cars.forEach(auto => {
        console.log(auto.marca + ' - ' + auto.modelo + ' - ' + auto.year + ' - ' + auto.puertas + ' Puertas - Transmision ' + auto.transmision + ' - Precio ' + auto.precio + ' - Color' + auto.color)
         document.body.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${auto.marca} Modelo: ${auto.modelo} Año: ${auto.year}</h5>
                <p class="card-text"><strong>Precio:</strong> ${auto.precio} </p>
                <p class="card-text">Puertas: ${auto.puertas} </p>
                <p class="card-text">Transmision: ${auto.transmision} </p>
                <p class="card-text">Color: ${auto.color} </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `; 
    });
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}

function filtrarYear(auto) {
  if (datosBusqueda.year) {
    return auto.year === datosBusqueda.year;
  }
  return auto;
}

function filtrarMinimo(auto) {
  if (datosBusqueda.minimo) {
    return auto.precio >= datosBusqueda.minimo;
  }
  return auto;
}

function filtrarMaximo(auto) {
  if (datosBusqueda.maximo) {
    return auto.precio <= datosBusqueda.maximo;
  }
  return auto;
}


function filtrarPuertas(auto) {
  if (datosBusqueda.puertas) {
    return auto.puertas === datosBusqueda.puertas;
  }
  return auto;
}

function filtrarAutos(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas);
    if(resultado.length>0){
        mostrarAutos(resultado)
    }else {
        document.body.innerHTML = `
        <div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
`;
    }
}

//console.log(cars)
//mostrarAutos(autos)
filtrarAutos()
