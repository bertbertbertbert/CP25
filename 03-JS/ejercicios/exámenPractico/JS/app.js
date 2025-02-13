let mostrarDialogo = document.querySelector("#bienvenido");
let mostrarInstruccion = document.querySelector("#mostra");
const inputUno = document.querySelector("#inputUno");
const btnUno = document.querySelector("#btnUno");
const inputDos = document.querySelector("#inputDos");
const btnDos = document.querySelector("#btnDos");
const btnNombre = document.querySelector("#btnNombre")
const error = document.querySelector("#error");
const inputNombre = document.querySelector("#inputNombre");
let final = document.querySelector("#ganaste");
const introduccionDatos = document.querySelector("#introduccionDatos")
const divPadre = document.querySelector("#botones");
const contrasteAlto = document.querySelector("#contrasteAlto");
var nombre;
var num1;
var num2;
let intentos;
var aleatorio;
arrayBotones = [];


const limpiar = () => {
  mostrarDialogo.innerHTML = "";
  mostrarInstruccion.innerHTML = "";
}

const crearBotones = () => {
  limpiar();
  introduccionDatos.style.display = "none";
  mostrarDialogo.innerHTML = `${nombre}, el nombre aleatorio está entre ${num1} y ${num2}`;
  for (let i = num1; i < num2 + 1; i++) {
    divPadre.innerHTML += `<button class="botonesHijos"; onclick="jugar(${i});"  id="${i}">${i}</button>`;
  }

}

const volverJugar = () => {
  location.reload();
}

const jugar = (id) => {
  if (id > aleatorio) {
    intentos--;
    error.style.color = "red";
    error.style.fontSize = "1.3rem"
    error.innerHTML = `Has introducido el número ${id}, el número a acertar es más pequeño. Te quedan ${intentos} intentos`
  } else if (id < aleatorio) {
    intentos--;
    error.style.color = "red";
    error.style.fontSize = "1.3rem"
    error.innerHTML = `Has introducido el número ${id}, el número a acertar es más grande.  Te quedan ${intentos} intentos`
  } else {
    limpiar();
    error.innerHTML = "";
    divPadre.style.display = "none";
    final.style.color = "green";
    final.style.fontSize = "2rem";
    final.innerHTML = `Has acertado! el número aleatorio es ${id} <br>
    <button class="btn btn-primary" onclick="volverJugar();">VOLVER A JUGAR</button>`;

  }
  if (intentos === 0) {
    limpiar();
    error.innerHTML = "";
    divPadre.style.display = "none";
    final.style.color = "red";
    final.style.fontSize = "2rem";
    final.innerHTML = `Has perdido! el número aleatorio era ${aleatorio} <br>
    <button class="btn btn-primary" onclick="volverJugar();">VOLVER A JUGAR</button>`;
  }
}


const numeroAleatorio = () => {
  let min = num1;
  let max = num2;
  console.log(min, max)
  aleatorio = Math.floor(Math.random() * (max + 1 - min)) + min;
  console.log(aleatorio)
  crearBotones();
  return aleatorio;
}


const introducirSegundoNumero = () => {

  let numero;
  numero = inputDos.value;
  numero = parseInt(numero);
  if (!isNaN(numero)) {
    if (numero === "" || numero < 30 || numero > 40) {
      error.innerHTML = "número incorrecto";
      console.log("numero incorrecto", numero);
      return false;
    } else {
      error.innerHTML = "";
      num2 = numero;
      console.log("numero correcto", num2);
      limpiar();
      numeroAleatorio();
      return true;
    }
  }
}


const introducirPrimerNumero = () => {
  btnNombre.style.display = "none";
  inputNombre.style.display = "none";
  inputUno.style.display = "block";
  btnUno.style.display = "block";
  limpiar();
  mostrarDialogo.innerHTML = `Bienvenido ${nombre}. El juego consiste en lo siguiente: Tendrás que indicarnos un número del 1 al 10, después otro del 30 al 40 y en ese momento el juego seleccionará un número dentro del rango comprendido entre entre las dos cifras que has seleccionado. Tendrás 5 intentos para acertarlo. <br><br>`
  mostrarInstruccion.innerHTML = "Introduce un número del 1 al 10";
  let numero;
  numero = inputUno.value;
  numero = parseInt(numero);
  if (!isNaN(numero)) {
    if (numero === "" || numero < 1 || numero > 10) {
      error.innerHTML = "número incorrecto";
      return false;
    } else {
      error.innerHTML = "";
      num1 = numero;
      inputDos.style.display = "block";
      btnDos.style.display = "block";
      mostrarInstruccion.innerHTML = "Introduce un número del 30 al 40";
      return true;
    }
  }
}

const comprobarNombre = () => {
  nombre = inputNombre.value;
  if (nombre == "" || nombre.match(/\d/)) {
    error.innerHTML = "Nombre no válido, vuelve a probar.";
    return false
  } else
    error.innerHTML = ""
  inputUno.value = "";
  introducirPrimerNumero();
  return true;
}

contrasteAlto.onclick = () => document.body.classList.toggle("contrasteAlto");

btnNombre.onclick = () => {
  comprobarNombre()
};
btnUno.onclick = () => {
  introducirPrimerNumero();
}
btnDos.onclick = () => {
  introducirSegundoNumero();
}

window.onload = () => { mostrarInstruccion.innerHTML = "Por favor, antes de empezar introduce tu nombre:"; intentos = 5; };