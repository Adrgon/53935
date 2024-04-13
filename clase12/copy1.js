//alert()

let autenticado = true;
let puedeComprar = false;

console.log(
  autenticado
    ? puedeComprar
      ? "Si puede comprar"
      : "esta autenticado pero no puede comprar"
    : "No esta autenticado"
);

console.log(
  autenticado && puedeComprar
    ? "Esta autenticado y puede pagar"
    : "No puede comprar"
);

let err = [];

err.push("no ingreso el nombre");
err.push("es pasword tiene menos de seis digitos");

if (err.length > 0) {
  console.log("Hay errores no puede seguir");
}

let resultado = err.length > 0 && "Hay Errores";

// Valores que evaluan a verdadero o a falso

if (autenticado) {
  console.log("si");
}

autenticado = 0;
if (autenticado) {
  console.log("1 evalua a verdadero");
}

// thruty
// falsy
/*

false
0
""
null
undefined
NaN
*/
