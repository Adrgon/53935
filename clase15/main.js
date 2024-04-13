const traerTexto = document.querySelector("#btnTexto");

//let usr = prompt("ingresar usuario")

traerTexto.addEventListener("click", async () => {
try{
  let respuesta = await fetch("https://jsonplaceholder.typicode.com/photos")
  //console.log(respuesta)
  let datos = await respuesta.json()
  //console.log(datos)
    renderHTML(datos);
}catch (err){
    console.log(err)
}})

;



function renderHTML(items) {
  let content = document.querySelector("#respuesta");
  let html = "";
  items.forEach(({title, url}) => {
    html += `
        <div>
            <h4>${title}</h4>
            <a href="${url}">Ver</a>

        </div>
        <hr>
        `;
  });
  content.innerHTML = html;
}
