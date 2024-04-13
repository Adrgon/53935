//alert()
// Simulacion de Aventura grafica (Graficos no va a tener)

const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

function calcularGolpe(){
  return parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
}

function ambosSiguenVivos(){
  return energiaGoku > 0 && energiaSuperman > 0
}

function ganoGoku(){
  return energiaGoku > 0;
}

/* let golpeGoku = Number(prompt("golpe goku"));
let golpeSuperman = Number(prompt("golpe superman")); */
while(ambosSiguenVivos() ){
    //round = round + 1;
    //round++;
    round+=1;
    
    console.log("--- Round " +  round + " ----")
    
    let golpeGoku = calcularGolpe(); 
    //let golpeGoku = parseInt(Math.random()*(MAX_POWER - MAX_POWER) + MIN_POWER)
    //console.log(golpeGoku)
    let golpeSuperman = calcularGolpe();

    if(golpeGoku == golpeSuperman){
        console.log("siga siga")
    }else if(golpeGoku > golpeSuperman){
    //energiaSuperman = energiaSuperman - golpeGoku;
        energiaSuperman -= golpeGoku
        if(energiaSuperman<0){
            energiaSuperman = 0;
        }
        document.write(
          '<div class="card"><img src="img/golpeGoku.jpeg" width="200" /></div>'
        );
    }else {
    //energiaGoku = energiaGoku - golpeSuperman
        energiaGoku -= golpeSuperman
        if (energiaGoku < 0) {
          energiaGoku = 0;
        }
                document.write(
                  '<div class="card"><img src="img/golpeSuperman.jpeg" width="200" /></div>'
                );
    }

console.log("Energia Goku " + energiaGoku);
console.log("Energia Superman " + energiaSuperman);
console.log("----------")

}

if(ganoGoku() ){
    console.log("gano goku")
    document.write(
      '<div class="ganador"><img src="img/wingoku.jpeg" width="200" /></div>'
    );
}else {
    console.log("gano superman")
    document.write(
      '<div class="ganador"><img src="img/winsuperman.jpeg" width="200" /></div>'
    );
}
 
