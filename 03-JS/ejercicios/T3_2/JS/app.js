function limpiar(item1, item2) {
  item1.innerHTML = "";
  item2.value = "";
}

//ejercicio 1
/* const btn1Limpiar = document.querySelector("#btnLimpiar_Ej_Uno"); */
let opciones = document.querySelector("#formularioMeses");
mostrar1 = document.querySelector("#mostrar1");

document.querySelector("#btn_Ej_Uno").addEventListener("click", function () {
  let mesos = [" Gener", " Febrer", " Març", " Abril", " Maig", " Juny", " Juliol", " Agost", " Septembre", " Octubre", " Novembre", " Decembre"];
  let resposta;
  for (let opcion of opciones) {
    if (opcion.checked) {
      let valor = opcion.value;
      switch (valor) {
        case "normal":
          resposta = mesos;
          break;
        case "alfabetic":
          resposta = mesos.sort();
          break;
        case "guions":
          resposta = mesos.toString().replaceAll(",", "-");
          break;
        case "invers":
          resposta = mesos.reverse();
          break;
        case "aleatori":
          let i = Math.floor(Math.random() * 11);
          resposta = mesos[i];
          break;
      }
    }
  }
  mostrar1.innerHTML = `<div class="alert alert-success">${resposta}</div>`;
});
document.querySelector("#btnLimpiar_Ej_Uno").onclick = () => {
  limpiar(mostrar1);
}

//EJERCICIO 2

const btn2 = document.querySelector("#btn_Ej_Dos");
const btnLimpiar2 = document.querySelector("#btnLimpiar_Ej_Dos");
let frase = document.querySelector("#frase2");
let mostrar2 = document.querySelector("#mostrar2");


function stringToArray(item) {
  item = item.value;
  item = item.replace(/[ .]/g, ",");
  let aArray = item.split(",");
  aArray = aArray.filter((ObjetoArray) => ObjetoArray !== "");
  desglosarArray(aArray);
}

function desglosarArray(item) {
  let clon = item.slice(0);
  let primeraPalabra = item[0];
  let n = item.length;
  let ultimaPalabra = item[n - 1];
  let ordre = clon.sort();
  let guions = item.toString().replaceAll(",", "-");
  mostrar2.innerHTML = `<div class="alert alert-success">La primera palabra és "${primeraPalabra}".</br>
  L'última palabra és "${ultimaPalabra}."</br>
  L'Allargada de l'array és de ${n}.</br>
  L'Array amb ordre alfabètic és "${ordre}."</br>
  Separada amb guions "${guions}".</div>`
}

btn2.onclick = () => {
  stringToArray(frase);
}
btnLimpiar2.onclick = () => {
  limpiar(mostrar2, frase);
}

//ejercicio 3
formulari = document.querySelector("#formulariEx3");
let nom;
let cognom;
let edat;
let DNI;

function recollirDadesFormulari(formulari) {
  nom = formulari[0].value;
  cognom = formulari[1].value;
  edat = formulari[2].value;
  DNI = formulari[3].value;
}

document.querySelector("#btn_Ej_tres").onclick = () => {
  alert(typeof (nom)); alert(typeof (cognom)); alert(typeof (edat)); alert(typeof (DNI));
}

recollirDadesFormulari(formulari);//omplim les variantes cerades a dal amb el valors recollits del formolari

function validarNom(item) {//creem les funciones per validar els 4 camps
  item = item.value;
  let regEx = new RegExp("^[a-z ,.'-]+$i");
  let test = regEx.test(item);
  return test;
}
function validarCognom(item) {
  item = item.value;
  let regEx = new RegExp("/^[a-z ,.'-]+$/i");
  let test = regEx.test(item);
  return test;
}
function validarEdat(item) {
  item = item.value;
  let regEx = new RegExp("^(1[89]|[2-9]\\d{1,2}|[1-9]\\d{3,})$");
  let test = regEx.test(item);
  return test;
}
function validarDNI(item) {
  item = item.value;
  let regEx = new RegExp("^\d{8}[A-Za-z]$");
  let test = regEx.test(item);
  return test;
}


/* if (!validarNom(nom)) {
  document.querySelector("#mostrar3").innerHTML = "Error a l'entrada del nom";
}
else if (!validarCognom(cognom)) {
  document.querySelector("#mostrar3").innerHTML = "Error a l'entrada del cognom";
}
else if (!validarEdat(edat)) {
  document.querySelector("#mostrar3").innerHTML = "Error a l'entrada de l'edat";
}

else if (!validarEdat(DNI)) {
  document.querySelector("#mostrar3").innerHTML = "Error a l'entrada deL DNI";
}

else {

} */