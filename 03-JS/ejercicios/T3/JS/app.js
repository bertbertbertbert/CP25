//ejercicio 1 Par O Impar
let num = document.querySelector("#numero");
let mostrar = document.querySelector("#mostrar1");
const btn1 = document.querySelector("#btn_Ej_Uno");
const btn1Limpiar = document.querySelector("#btn_Ej_Uno_Limpiar");
let alertNaN = `<div class="alert alert-warning">No se puede operar</div>`;
function limpiar(item1, item2, item3, item4) {
  item1.innerHTML = "";
  item2.value = "";
  item3.value = "";
  item4.value = "";
}

const parImpar = () => {
  let n = Number(num.value.trim().replace(",", "."));//hacemos desapararecer los espacios en blanco y comprobamos que es un numero y si no devuelve un NaN. Reemplacamos las comas por los puntos(decimales)
  let alertImpar = `<div class="alert alert-success"> El valor introducido es un númeo impar, concretamente el ${n}</div>`;
  let alertPar = `<div class="alert alert-success"> El valor introducido es un númeo par, concretamente el ${n}</div>`;
  if (isNaN(n) || n === "" || n == 0) { return mostrar.innerHTML = alertNaN; }//devolvemos el alertNaN si es NaN y detenemos la funcion con el return
  result = n % 2;
  //condicional ternario 
  (result !== 0) ?
    resultado = alertImpar :
    resultado = alertPar;
  mostrar.innerHTML = resultado;
}

btn1.onclick = parImpar;
btn1Limpiar.onclick = () => limpiar(mostrar, num);


//ejrcicio 2 división 144/12

let btn2 = document.querySelector("#btn_Ej_Tos");
let btn2Limpiar = document.querySelector("#btn_Ej_Dos_Limpiar");
let mostrar2 = document.querySelector("#mostrar2");
let num2 = document.querySelector("#numero2");

const division = function () {
  let resultadoDivision = 144 / 12;
  return resultadoDivision;
}

const comparacion = function (division) {
  let resultadoDivision = division();
  let n2 = Number(num2.value.trim().replace(",", "."));
  if (isNaN(n2) || n2 === "") {
    return mostrar2.innerHTML = alertNaN;
  }
  if (n2 === resultadoDivision) {
    mostrar2.innerHTML = `<div class="alert alert-success" >Respuesta Correcta</div>`;
  } else {
    mostrar2.innerHTML = `<div class="alert alert-danger" >Respuesta Incorrecta</div>`;
  }
}
btn2.onclick = () => comparacion(division);
btn2Limpiar.onclick = () => limpiar(mostrar2, num2);

//ejercicio 3
let btn3 = document.querySelector("#btn_Ej_Tres");
let btn3Limpiar = document.querySelector("#btn_Ej_Tres_Limpiar");
let preu = document.querySelector("#preu");
let iva = document.querySelector("#iva");
let mostrar3 = document.querySelector("#mostrar3");

function calcularIva(num1, num2) {
  num1 = Number(num1.value.trim().replace(",", "."));
  num2 = Number(num2.value.trim().replace(",", "."));
  let suma = num1 + num2;
  if (isNaN(num1) || num1 === "") {
    return mostrar3.innerHTML = `<div class="alert alert-warning">Has introduït un caràcter incorrecte al preu</div>`;
  } else if (isNaN(num2) || num2 === "") {
    return mostrar3.innerHTML = `<div class="alert alert-warning">Has introduït un caràcter incorrecte a l'iva</div>`;
  } else {
    mostrar3.innerHTML = suma;
  }

}
btn3.onclick = () => calcularIva(preu, iva);
btn3Limpiar.onclick = () => {
  mostrar3.innerHTML = "";
  preu.value = "";
  iva.value = "";
};

//ejercicio 4
let btn4 = document.querySelector("#btn_Ej_Cuatro");
let btn4Limpiar = document.querySelector("#btn_Ej_Cuatro_Limpiar");
let num1 = document.querySelector("#numUnoEj4");
let select = document.querySelector("#select");
let numb2 = document.querySelector("#numDosEj4");
let mostrar4 = document.querySelector("#mostrar4");


function calculadora(cifra1, cifra2) {
  let resultadoCalculadora;
  let valorSeleccionado = select.value;
  cifra1 = Number(cifra1.value.trim().replace(",", "."));
  cifra2 = Number(cifra2.value.trim().replace(",", "."));

  if (isNaN(cifra1) || cifra1 === "") {
    return mostrar4.innerHTML = `<div class="alert alert-warning">Has introduït un caràcter incorrecte al nombre 1</div>`;
  } else if (isNaN(cifra2) || cifra2 === "") {
    return mostrar4.innerHTML = `<div class="alert alert-warning">Has introduït un caràcter incorrecte al nombre 2</div>`;
  } else {
    switch (valorSeleccionado) {
      case "sumar":
        resultadoCalculadora = cifra1 + cifra2;
        break;
      case "restar":
        resultadoCalculadora = cifra1 - cifra2;
        break;
      case "multiplicar":
        resultadoCalculadora = cifra1 * cifra2;
        break;
      case "dividir":
        resultadoCalculadora = cifra1 / cifra2;
        break;
      case "modul":
        resultadoCalculadora = cifra1 % cifra2;
        break;
    }
    return mostrar4.innerHTML = resultadoCalculadora;
  }
}

btn4.onclick = () => calculadora(num1, numb2);
btn4Limpiar.onclick = () => {
  mostrar4.innerHTML = "";
  num1.value = "";
  numb2.value = "";
};

//ejercicio 5
let btn5 = document.querySelector("#btn_Ej_Cinco");
let btn5Limpiar = document.querySelector("#btn_Ej_Cinco_Limpiar");
let numProductes = document.querySelector("#numUnoEj5");
let mostrar5 = document.querySelector("#mostrar5");

let numeroProducto = 0;
let producto;
let listaProductos = [];
function mostrarCodigos(numCodigos) {
  numCodigos = Number(numCodigos.value.trim().replace(",", "."));
  if (isNaN(numCodigos)) { return mostrar5.innerHTML = alertNaN; }
  else {
    for (let i = 0; i < numCodigos; i++) {
      numeroProducto++;
      producto = ` Codi_Producte:02312_${numeroProducto}</br>`;
      listaProductos.push(producto);
    };
    mostrar5.innerHTML = listaProductos;
  }
}
btn5.onclick = () => mostrarCodigos(numProductes);
btn5Limpiar.onclick = () => limpiar(mostrar5, numProductes);

//ejercicio 7
let btn7 = document.querySelector("#btn_Ej_Siete");
let btn7Limpiar = document.querySelector("#btn_Ej_Siete_Limpiar");
let selectBg = document.querySelector("#bgColor");
let color;

btn7.onclick = () => {
  color = selectBg.value;
  document.body.style.background = color;
}

btn7Limpiar.onclick = () => document.body.style.backgroundColor = "white";