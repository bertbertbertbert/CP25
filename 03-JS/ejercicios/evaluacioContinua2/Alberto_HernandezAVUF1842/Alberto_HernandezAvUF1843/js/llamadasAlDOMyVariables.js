const resetBtn = document.querySelector(".reset_btn");
const divPadre = document.querySelector(".inputs");
const inputLetra = document.querySelector(".lletra");
const mostrarPista = document.querySelector(".pista span");
const mostrarVidas = document.querySelector(".restantes span");
const mostrarErrores = document.querySelector(".letrasErroneas span");
const mostrarFinal = document.querySelector(".mostra");
let listaInputs = [];
let letrasAcertadas = [];
let todasLasIntroducidas = [];
let arrayPalabra = [];
let vidasJugador;
let acertijo;
let palabra;
let mensajeAcierto;
let mensajeError;
let juegoAcabado = false;
const patternLetras = /^[a-zA-Z]+$/;