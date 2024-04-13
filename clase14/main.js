const loadImage = (src) => {
    return new Promise((resolve, reject)=>{
        const img = document.createElement('img')
        //const img = new Image();
        //img.width = "200";
        img.setAttribute('width', '200');
        //<img width="200" />
        
        img.onload = ()=>{
            resolve(img)
        }
        img.onerror = (err) => {
            reject('La imagen no se puede cargar')
        }
        
        img.setAttribute('src', src)
    })
}


loadImage(
  "https://media.revistaad.es/photos/60c226c8557b95c52a9605d0/16:9/w_2560%2Cc_limit/256870.jpg"
)
.then((res)=>{
    console.log('la imagen se cargo correctamente')
    document.body.appendChild(res)
})
.catch((err)=>{
    console.log(err)
    document.querySelector('#error').innerHTML = err
})
.finally(()=>{
    console.log('fin de la ejecucion')
})
