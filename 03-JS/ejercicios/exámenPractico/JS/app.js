let mostrarDialogo = document.querySelector("#bienvenido");
let mostrarInstruccion = document.querySelector("#mostra");
let mostrarInstruccion2 = document.querySelector("#mostra2");
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
const array = [btnUno, inputUno, btnDos, inputDos];
let nombre;
let num1;
let num2;
let intentos;
let aleatorio;

const limpiar = () => {
  mostrarDialogo.innerHTML = "";
  mostrarInstruccion.innerHTML = "";
  mostrarInstruccion2.innerHTML="";
  error.innerHTML = "";
  final.innerHTML = "";
  divPadre.innerHTML = "";
}

const crearBotones = () => {
  limpiar();
  divPadre.style.display="block";
  introduccionDatos.style.display = "none";
  divPadre.style.display = "block ";
  mostrarDialogo.innerHTML = `${nombre}, el nombre aleatorio está entre ${num1} y ${num2}`;
  for (let i = num1; i < num2 + 1; i++) {
    divPadre.innerHTML += `<button class="botonesHijos"; onclick="jugar(${i});"  id="${i}">${i}</button>`;
  }

}

const volverJugar = () => {
  limpiar();
  mostrarDialogo.innerHTML="SIGUE LOS PASOS QUE TE INDIQUE"
  inputUno.value="";
  inputDos.value="";
  btnUno.disabled = false;
  introduccionDatos.style.display = "block";
  inputNombre.style.display = "block";
  btnNombre.style.display = "block";
  mostrarInstruccion.innerHTML = "Por favor, antes de empezar introduce tu nombre:";
  array.forEach(elemento => {
    elemento.style.display = "none";
  });
  divPadre.style.display="none";
  intentos = 5;
}

const jugar = (id) => {
  let botonClicado = document.querySelectorAll(".botonesHijos");
  botonClicado[id - num1].style.backgroundColor = "red";
  if (id > aleatorio) {
    intentos--;
    error.style.color = "red";
    error.style.fontSize = "1.3rem"
    error.innerHTML = `Has introducido el número ${id}, el número a acertar es más pequeño. Te quedan ${intentos} intentos`
  } else if (id < aleatorio) {
    intentos--;
    error.style.color = "red";
    error.style.fontSize = "1.3rem"
    error.innerHTML = `Has introducido el número ${id}, el número a acertar es más grande. Te quedan ${intentos} intentos`
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
  aleatorio = Math.floor(Math.random() * (max + 1 - min)) + min;
  console.log(aleatorio)
  crearBotones();
}

const introducirSegundoNumero = () => {
  inputDos.focus();
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
  inputUno.focus();
  btnNombre.style.display = "none";
  inputNombre.style.display = "none";
  inputUno.style.display = "block";
  btnUno.style.display = "block";
  limpiar();
  mostrarDialogo.innerHTML = `Bienvenid@ ${nombre}. El juego consiste en lo siguiente: Tendrás que indicarnos un número del 1 al 10, después otro del 30 al 40 y en ese momento el juego seleccionará un número dentro del rango comprendido entre entre las dos cifras que has seleccionado. Tendrás 5 intentos para acertarlo. <br><br>`
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
      btnUno.disabled=true;
      inputDos.style.display = "block";
      btnDos.style.display = "block";
      inputDos.value = ""; 
      mostrarInstruccion2.innerHTML = "Introduce un número del 30 al 40";
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
  inputUno.value = ""; 
  introducirPrimerNumero();
  return true;
}


btnNombre.onclick = () => {
  comprobarNombre()
};
btnUno.onclick = () => {
  introducirPrimerNumero();
}
btnDos.onclick = () => {
  introducirSegundoNumero();
}

document.addEventListener("keydown", function(event){
  if (event.target.classList.contains('botonesHijos')) {
    return; 
  }
  if(event.key==="Enter"){
  let arrayBotones = [btnNombre, btnUno, btnDos];
  for (boton of arrayBotones){
    if (boton.style.display==="block" && !boton.disabled){
      boton.click();
    }
  }
}
})

window.onload = () => {
  divPadre.style.display="none";
  mostrarInstruccion.innerHTML = "Por favor, antes de empezar introduce tu nombre:";
  btnNombre.style.display = "block";
  intentos = 5;
  inputUno.value="";
  inputDos.value="";
  inputNombre.focus();  
  btnNombre.disabled = false;
};