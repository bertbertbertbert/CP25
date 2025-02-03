var resetBtn = document.querySelector(".reset-btn");
const divPadre = document.querySelector(".inputs");
var inputLetra = document.querySelector(".lletra");
var mostrarPista = document.querySelector(".pista span");
let mostrarVidas = document.querySelector(".restantes span");
let mostrarErrores = document.querySelector(".letrasErroneas span");
let mostrarFinal = document.querySelector(".mostra");


let vidasJugador = 7;
let vidasPalabra = palabra.length
mostrarVidas.innerHTML = vidasJugador;
mostrarPista.innerHTML = pista;
inputLetra.style.visibility = "visible";

inputLetra.focus();
inputLetra.value = "";
const listaInputs = [];
const letrasAcertadas = [];
const todasLasIntroducidas = [];

for (let i = 0; i < arrayPalabra.length; i++) {
  const input = document.createElement("input");
  const letra = arrayPalabra[i];
  /* input.value = letra; */
  divPadre.appendChild(input);
  listaInputs.push(input);
}

/* function compararVidas(item) {
  letraEncontrada = item;
  if (!letraEncontrada) {
    vidasJugador--;
    mostrarErrores.innerHTML += letraIntroducida;
  } else {
    vidasPalabra--;
  }
  
} */

function compararLetras() {

  let letraIntroducida = inputLetra.value.toUpperCase();
  let letraEncontrada = false;


  if (!todasLasIntroducidas.includes(letraIntroducida)) {
    todasLasIntroducidas.push(letraIntroducida);
    console.log(todasLasIntroducidas);

    for (let i = 0; i < arrayPalabra.length; i++) {
      if (arrayPalabra[i].includes(letraIntroducida)) {
        listaInputs[i].value = letraIntroducida;
        letraEncontrada = true;
        letrasAcertadas.push(letraIntroducida);
      }
    }
  }

  inputLetra.value = "";

  if (!letraEncontrada && !todasLasIntroducidas.includes(letraIntroducida)) {
    vidasJugador--;
    mostrarErrores.innerHTML += letraIntroducida;
  }

  mostrarVidas.innerHTML = vidasJugador;

  console.log(arrayPalabra, letrasAcertadas);

  if (vidasJugador === 0) {
    mostrarFinal.innerHTML = mensageError;
    inputLetra.style.visibility = "hidden";
  }
  if (letrasAcertadas.length === arrayPalabra.length) {
    mostrarFinal.innerHTML = mensageAcierto;
    inputLetra.style.visibility = "hidden";

  }

}
resetBtn.onclick = () => {
  location.reload()
};

inputLetra.addEventListener("keyup", compararLetras);