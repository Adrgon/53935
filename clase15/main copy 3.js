const traerTexto = document.querySelector("#btnTexto");


traerTexto.addEventListener('click', ()=>{
    fetch("empleados.json")
      .then((res) => {
        //console.log(res)
        return res.json();
      })
      .then((empleados) => {
        console.log(empleados);
        renderHTML(empleados)
      })
      .catch((err)=>{
        console.log('hubo un error')
      })
      .finally();
})


function renderHTML(items){
    let content = document.querySelector("#respuesta");
    let html = ''
    items.forEach(empleado => {
        html += `
        <div>
            <h4>${empleado.nombre}</h4>
            <p>${empleado.empresa}</p>
            <p>${empleado.puesto}</p>
        </div>
        <hr>
        `;
    });
    content.innerHTML = html;
}
