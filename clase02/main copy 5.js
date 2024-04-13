/* 
|| -> suma logica
&& -> multiplicacion logica 
! -> Negacion
*/

const usuario = false;
const puedePagar = true;

if(usuario && puedePagar){
    alert("Tu pedido se realizo con exito");
}else {
    console.log("Hubo un error con tu pago")
}

/* 
true    true    true
true    false   false
false   true    false
false   false   false
*/


const usr = false;
const identificado = false;

if (usr || identificado) {
  alert("Puedo comprar");
} else {
  console.log("Necesitamos identificarte");
}

/* 
true    true    true
true    false   true
false   true    true
false   false   false
*/
