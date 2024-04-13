/*         
    console.log(document)
        document.addEventListener('click', function(){
            alert("Click en el documento")
        }) 
*/

let btn = document.querySelector("button"); // seleccionar el elemento
console.log(btn);

/* btn.addEventListener('click', ()=> {
    alert("click en el boton")
}) */

/* 
function reaccionarAlClick(){
    alert("click en el boton");
}  
*/

// Reaccionar al evento
const reaccionarAlClick = () => {
  alert("click en el boton");
};
btn.addEventListener("click", reaccionarAlClick); // escuchar el evento
