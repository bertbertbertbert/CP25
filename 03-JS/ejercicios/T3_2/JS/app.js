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

let formulari = document.querySelector("#formulariEx3");
let btn3 = document.querySelector("#btn_Ej_tres");
let mostrar3 = document.querySelector("#mostrar3");

function crearUsuario(item) {
  let nom = item.elements["nom"].value;
  let cognom = item.elements["cognom"].value;
  let edat = item.elements["edat"].value;
  let dni = item.elements["dni"].value;
  let persona = {
    nom: nom,
    cognom: cognom,
    edat: edat,
    dni: dni
  }
  //dues maneres de mostrar les dades:
/*   mostrar3.innerHTML = JSON.stringify(persona);//ho mostra tal com es veuria a l'array
 */  mostrar3.innerHTML = `Nom: ${nom}. Cognom: ${cognom}. Edat:${edat}. DNI:${dni}`;
}

btn3.onclick = () => {
  crearUsuario(formulari);
}

/* let personas = [
  {
    nom: "Alberto", cognom: "Hernandez", edat: 23
  },
  {
    nom: "Rogelio", cognom: "fernandez", edat: 33

  }
]
 */

//ejercicio4

let formulari4 = document.querySelector("#formulariEx4");
let mostrar4 = document.querySelector("#mostrar4");
let btn4 = document.querySelector("#btn_Ej_cuatro");
let nom4 = formulari4.elements["nom4"].value;
let cognom4 = formulari4.elements["cognom4"].value;
let edat4 = formulari4.elements["edat4"].value;
let dni4 = formulari4.elements["dni4"].value;

function recogerDatos(item) {
  nom4 = item.elements["nom4"].value;
  cognom4 = item.elements["cognom4"].value;
  edat4 = item.elements["edat4"].value;
  dni4 = item.elements["dni4"].value;
}

//validacions
/* function validarText(item) {
  let validacio;
  if (item.length < 3 || item.length > 20 || item.match(/\d/) || item === "") {
    validacio = false;
  }
  return validacio;
}
function validarEdat(item) {
  let validacio = true;
  if (item < 17 || isNaN(item)) {
    validacio = false;
  }
  return validacio;
}
function validarDNI(item) {
  let exreg = /^[A-Za-z]{7}\d$/;
  let validacio = true;
  if (item.length !== 8) {
    validacio = false;
  } else if (!exreg.test(item)) {
    validacio = false;
  }
  return validacio;
} */
let personas = [];

/* function validació() {
  if (!validarText(nom4)) {
    document.querySelector("#errorNom").innerHTML = `<p class="alert alert-danger" role="alert> Error introduïnt el nom </p>`

  }
  else if (!validarText(cognom4)) {
    document.querySelector("#errorCognom").innerHTML = `<p class="alert alert-danger" role="alert> Error introduïnt el cognom </p>`
  }
  else if (!validarEdat(edat4)) {
    document.querySelector("#errorEdat").innerHTML = `<p class="alert alert-danger" role="alert> Error introduïnt l'edat</p>`
  }
  else if (!validarDNI(dni4)) {
    document.querySelector("#errorDni").innerHTML = `<p class="alert alert-danger" role="alert> Error introduïnt el DNI</p>`
  } else {
    let persona = {
      "Nom": nom4, "Cognom": cognom4, "Edat": edat4, "DNI": dni4
    }
    personas.push(persona);
    mostrar4.innerHTML = JSON.stringify(personas);
  }
} */
let persona = {
  "Nom": nom4, "Cognom": cognom4, "Edat": edat4, "DNI": dni4
}
personas.push(persona);
mostrar4.innerHTML = JSON.stringify(personas);


btn4.onclick = () => {
  recogerDatos(formulari4);
  validació();
}