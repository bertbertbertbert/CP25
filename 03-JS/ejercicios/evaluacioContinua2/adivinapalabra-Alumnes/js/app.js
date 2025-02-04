//valores iniciales generales del juego
inputLetra.focus();
const listaInputs = [];
const letrasAcertadas = [];
const todasLasIntroducidas = [];
let vidasJugador = vidasJugadorSegunPalabra();
let vidasPalabra =  palabra.length;
mostrarVidas.innerHTML = vidasJugador;
mostrarPista.innerHTML = pista;

//añadimos contenedores de letras vacíos
for (let i = 0; i < arrayPalabra.length; i++) {
  const input = document.createElement("input");
  const letra = arrayPalabra[i];
  /* input.value = letra; */
  divPadre.appendChild(input);
  listaInputs.push(input);
}

//función para elegir número de intentos
function vidasJugadorSegunPalabra(){
  if(palabra.length<=7){
    return 6;
  }else{
    return 8;
  }
};

//funcion comparar letras y restar vida si es necesario
function compararLetras() {
  let letraIntroducida = inputLetra.value.toUpperCase();
  let letraEncontrada = false;

  if (!todasLasIntroducidas.includes(letraIntroducida)) {
    todasLasIntroducidas.push(letraIntroducida);
    console.log(todasLasIntroducidas);
    for (let i = 0; i < arrayPalabra.length; i++) {
      if (arrayPalabra[i].includes(letraIntroducida)) {
        listaInputs[i].value = letraIntroducida;
        letrasAcertadas.push(letraIntroducida);
        letraEncontrada = true;
      }
    }
    if (!letraEncontrada) {
      vidasJugador--;
      mostrarErrores.innerHTML += letraIntroducida;
    }
  }else{
    alert("No puedes repetir letra!")
  }

  inputLetra.value = "";
  mostrarVidas.innerHTML = vidasJugador;
}

//funcion que mira si el juego se ha acabado para mostrar resultado en cada keyup
function acabaONo(){
  if (vidasJugador === 0) {
    mostrarFinal.innerHTML = mensajeError;
    inputLetra.style.visibility = "hidden";
  }
  if (letrasAcertadas.length === arrayPalabra.length) {
    mostrarFinal.innerHTML = mensajeAcierto;
    inputLetra.style.visibility = "hidden";

  }
}

//reseteamos juego
resetBtn.onclick = () => location.reload();
//keyups listeners
inputLetra.addEventListener("keyup", compararLetras);
inputLetra.addEventListener("keyup",  acabaONo);