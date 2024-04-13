// 0ca063b746578ffb14d9f9455bdb165a

let btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
    const key = "0ca063b746578ffb14d9f9455bdb165a"
    let ciudad = document.querySelector('#ciudad').value
    ciudad = encodeURIComponent(ciudad)

    if(ciudad != ""){
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`;
        //console.log(url)

        fetch(url)
            .then(respuesta => {
                return respuesta.json()
            })
            .then( clima => {
                //console.log(clima)
                let temp = clima.main.temp
                let tempC = temp - 273.13

                document.querySelector('#temperatura').innerHTML = tempC.toFixed(0)


                if(tempC < 10){
                    document.querySelector("#temperatura").className = 'cold';
                }else {
                    document.querySelector("#temperatura").className = "warm";

                }
            })
            .catch( err => console.log(err))
    }
})
