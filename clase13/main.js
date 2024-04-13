let texto = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit hic fugit beatae voluptatem neque! Quos, voluptatibus vero! Consectetur, repellendus, quidem deleniti repudiandae soluta nam perspiciatis illum accusantium consequatur, distinctio modi?";


//const result = document.getElementById('result') // faster
//console.log(result)
//const res = $('result') // slow
//console.log(res)
//result.textContent = texto;
//res.textContent = texto;


//$('h1').textContent = "Clase de librerias";

let h1 = $('h1') 

h1.on('click', ()=>{
    alert("Click en el h1")
})
