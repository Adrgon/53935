// 0 = Aire
// 1 = Pared
// 2 = jugador
// 3 = premios

/*         let mapa = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 3, 0, 0, 0, 3, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 3, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 3, 0, 0, 0, 0, 0, 3, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ] */

let mapa = [
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 3, 0, 0, 0, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 3, 0, 1, 2, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
];

const TAMANIO_PARED = 5;
const ALTO_PARED = 3;

let muro;
let premio;

let muros = document.querySelector("#muros");
let premios = document.querySelector("#premios");
let scoreText = document.querySelector("#score");

// (x y z) (1 1.5, 1) (x 1.5 z)

for (let x = 0; x < mapa.length; x += 1) {
  for (let z = 0; z < mapa.length; z += 1) {
    const posicion =
      (x - mapa.length / 2) * TAMANIO_PARED +
      " " +
      1.5 +
      " " +
      (z - mapa[x].length / 2) * TAMANIO_PARED;

    if (mapa[x][z] === 0) {
      continue;
    } else if (mapa[x][z] === 1) {
      muro = document.createElement("a-box");
      muros.appendChild(muro);
      muro.setAttribute("color", "#fff");
      muro.setAttribute("material", "src: #pared");
      muro.setAttribute("width", TAMANIO_PARED);
      muro.setAttribute("depth", TAMANIO_PARED);
      muro.setAttribute("height", ALTO_PARED);
      muro.setAttribute("position", posicion);
      muro.setAttribute("static-body", "");
    } else if (mapa[x][z] === 2) {
      document.querySelector("#jugador").setAttribute("position", posicion);
    } else {
      premio = document.createElement("a-sphere");
      premios.appendChild(premio);
      premio.setAttribute("position", posicion);
      premio.setAttribute("color", "tomato");
      premio.setAttribute("radius", "0.3");
      premio.setAttribute("class", "premio");
    }
  }
}

premios = document.querySelectorAll(".premio");

let score = premios.length;

scoreText.setAttribute("value", `Encontra ${score} pokebolas`);
scoreText.setAttribute("color", "#991166");

premios.forEach((premio) => {
  premio.addEventListener("click", () => {
    premio.setAttribute("visible", false);
    score -= 1;
    scoreText.setAttribute("value", `Encontra ${score} pokebolas`);

    if (score <= 0) {
      scoreText.setAttribute("value", `Encontraste todas las pokebolas`);
    }
  });
});
