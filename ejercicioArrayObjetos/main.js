/* console.log(galeria);
console.table(galeria);


console.log(galeria[0]);
console.log(galeria[0].foto);
console.log(galeria[0].persona);
console.log(galeria[0].frase);
 */

/* for (let i = 0; i < galeria.length; i += 1) {
  console.log(galeria[i].foto);
  console.log(galeria[i].persona);
  console.log(galeria[i].frase);

  console.log('-------------------')


} */



/* for (let persona of  galeria) {
  document.write("<p>" + persona.foto + "</p>");
  document.write("<p>" + persona.persona + "</p>");
  document.write("<p>" + persona.frase + "</p>");
  document.write("<hr/>");
} */



for (const item of galeria) {
  document.body.innerHTML += `
    <div class='card' style='width: 18rem'>
        <img src='${item.foto}' width='200' />
        <div class='card-body'>
            <h5 class='card-title'>${item.persona}</h5>
            <p class='card-text'>" ${item.frase}</p>
        </div>
    </div>`
} 
