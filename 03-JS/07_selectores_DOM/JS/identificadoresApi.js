const principal = document.getElementById("principal");

/* const parrafo = document.getElementsByTagName("p");*/
const parrafo = document.querySelectorAll("p");

/* const clase = document.getElementsByClassName("pepe2"); */
const clase = document.querySelectorAll(".pepe2");

const p1 = document.querySelector("#principal p#p1", "#otro");

const ejecutar = () => {
  principal.onclick = adeu;
  for (let i = 0; i < 8; i++) {
    parrafo[i].onclick = saludo;
  }
  parrafo[2].onclick = bgColor;

  for (let i = 0; i < 2; i++) {
    clase[i].onmouseover = color;
  }
  p1.onclick = saludo;

  document.querySelector("button").onmouseover = foco;
  document.querySelector("button").onkeyup = detectarTecla;
}

const saludo = () => {
  alert("Hola");
}

const adeu = () => {
  alert("Adeu");
}
const foco = () => {
  document.querySelector("button").focus();
}
const bgColor = () => {
  document.querySelector("#principal").style.backgroundColor = "red";
}
const color = () => {
  document.querySelector("#principal").style.color = "grey";
}

const detectarTecla = (e) => {
  e.keyCode == 13 ? alert("has presionado la tecla enter") :
    alert("no has presionado a tecla enter");
}

window.onload = ejecutar; //con este onload carga la funcion ejecutar al haber leido todo el archivo. Si no fuese así, no podría ejecutar su contenido ya que son funciones que se leen después. Están más abajo en el código.

