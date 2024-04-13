const traerTexto = document.querySelector("#btnTexto");


traerTexto.addEventListener('click', ()=>{
    fetch("json/empleado.json")
      .then((res) => {
        //console.log(res)
        return res.json();
      })
      .then((empleado) => {
        console.log(empleado.nombre);
      })
      .catch((err)=>{
        console.log('hubo un error')
      })
      .finally();
})
