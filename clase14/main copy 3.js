/* 
const hacerAlgo = new Promise((resolve, reject)=>{
    if(true){
        resolve()
    }else{
        reject()
    } 
}) 
*/


// si hacer algo seria una funcion normal 
//let resultado = hacerAlgo()
// cuando esto es una promesa
/* 
hacerAlgo()
    .then()
    .catch()
    .finaly() 
*/

const aplicarDescuento = new Promise((resolve, reject)=>{
    resolve("Se aplico el descuento correctamente");
    //reject("No se aplico el descuento");
})

aplicarDescuento
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
    .finally(() => {
        console.log('fin de la comprobacion')
    })
