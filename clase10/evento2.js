// seleccionamos el elemento del domo al que queremos reaccionar
const btn = document.querySelector("#btn");
//const res = document.querySelector('#res')
const imagen = document.querySelector("img");
btn.onclick = function () {
  //res.innerHTML += "<strong>Click en el boton</strong>"
  imagen.src =
    "https://images.pagina12.com.ar/styles/focal_content_1200x1050/public/2023-04/469114-simpsons_0.jpg?h=b3660f0d&itok=6wS6DabM";
  imagen.width = "200";
};
