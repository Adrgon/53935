const traerTexto = document.querySelector("#btnTexto");

traerTexto.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => {
      //console.log(res)
      return res.json();
    })
    .then((empleados) => {
      //console.log(empleados);
      renderHTML(empleados);
    })
    .catch((err) => {
      console.log("hubo un error");
    })
    .finally();
});

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
