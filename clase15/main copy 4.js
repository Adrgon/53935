let url = "https://jsonplaceholder.typicode.com/users";

const userData = {
    name: "adrgon",
    email: 'adrgon@mail.com'
}

const data = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
}


window.addEventListener('DOMContentLoaded', ()=>{
    fetch(url, data)
        .then(response => {
            if(!response.ok){
                throw new Error('No se pudo completar')
            }
            //console.log(response)
            return response.json()
        })
        .then( datos => {
            console.log(datos)
            document.body.innerHTML = "Se creo el usuario con el id " + datos.id;
        })
        .catch()
})
