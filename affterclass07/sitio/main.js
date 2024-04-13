const links = document.querySelectorAll('nav a')
console.log(links)
let url;

for(let link of links){
    link.addEventListener('click', setURL)
}

function setURL(evt){
    evt.preventDefault()
    url = evt.target.dataset.pagina + ".html";
    pedirPagina(url)
}

function pedirPagina(direccion){
    fetch(direccion)
        .then(respuesta => {
            return respuesta.text()
        })
        .then(pagina => {
            document.querySelector('main').innerHTML = pagina
        })
        .catch( err => console.log(err))
}

window.addEventListener('DOMContentLoaded', ()=> {
    url = "inicio.html"
    pedirPagina(url)
})
