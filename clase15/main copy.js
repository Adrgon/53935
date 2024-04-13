const traerTexto = document.querySelector("#btnTexto");

/* window.addEventListener('DOMContentLoaded', ()=>{
    fetch('texto.txt')
        .then((res)=>{
            //console.log(res)
            return res.text()
        })
        .then((texto)=>{
            console.log(texto)
        })
        .catch()
        .finally()
}) */

traerTexto.addEventListener('click', ()=>{
    fetch("texto.txt")
      .then((res) => {
        //console.log(res)
        return res.text();
      })
      .then((texto) => {
        console.log(texto);
      })
      .catch((err)=>{
        console.log('hubo un error')
      })
      .finally();
})
