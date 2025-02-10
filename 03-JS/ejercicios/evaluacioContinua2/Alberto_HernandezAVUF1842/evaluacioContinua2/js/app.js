//valores iniciales del juego
inputLetra.focus();
const listaInputs = [];
const letrasAcertadas = [];
const todasLasIntroducidas = [];
let vidasJugador = vidasJugadorSegunPalabra();
let vidasPalabra = palabra.length;
mostrarVidas.innerHTML = vidasJugador;
mostrarPista.innerHTML = pista;
let patternLetras = /^[a-zA-Z]+$/;
let juegoAcabado = false;

//añadimos contenedores de letras vacíos
for (let i = 0; i < arrayPalabra.length; i++) {
  const input = document.createElement("input");
  input.setAttribute("disabled", "");
  const letra = arrayPalabra[i];
  /* input.value = letra; */
  divPadre.appendChild(input);
  listaInputs.push(input);
}

//función para elegir número de intentos
function vidasJugadorSegunPalabra() {
  if (palabra.length <= 7) {
    return 6;
  } else {
    return 8;
  }
};

//función comparar letras y restar vida si es necesario
function compararLetras() {
  let letraIntroducida = inputLetra.value.toUpperCase();
  let letraEncontrada = false;

  if (patternLetras.test(letraIntroducida) && !todasLasIntroducidas.includes(letraIntroducida)) {
    todasLasIntroducidas.push(letraIntroducida);
    console.log(todasLasIntroducidas);
    for (let i = 0; i < arrayPalabra.length; i++) {
      if (arrayPalabra[i].includes(letraIntroducida) && patternLetras.test(letraIntroducida)) {
        listaInputs[i].value = letraIntroducida;
        letrasAcertadas.push(letraIntroducida);
        letraEncontrada = true;
      }
    }
    if (!letraEncontrada) {
      vidasJugador--;
      mostrarErrores.innerHTML += letraIntroducida;
    }
  }
  inputLetra.value = "";
  mostrarVidas.innerHTML = vidasJugador;
}

//funcion que mira si el juego se ha acabado en cada keyup
function acabaONo() {
  if (vidasJugador === 0) {
    mostrarFinal.innerHTML = mensajeError;
    inputLetra.style.visibility = "hidden";
    juegoAcabado = true;

  }
  if (letrasAcertadas.length === arrayPalabra.length) {
    mostrarFinal.innerHTML = mensajeAcierto;
    inputLetra.style.visibility = "hidden";
    juegoAcabado = true;

  }
}

//podemos resetear el juego clicando botón resetBtn en todo momento o presionando Enter cuando el juego ha acabado
resetBtn.onclick = () => location.reload();
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    if (juegoAcabado === true) {
      location.reload();
    }
  }
});

//keyups listeners
inputLetra.addEventListener("keyup", compararLetras);
inputLetra.addEventListener("keyup", acabaONo);

