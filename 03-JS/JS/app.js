/* alert("PopUp desde un alert escrito desde un archivo js externo");
console.log("primer texto escrito desde un archivo externo"); */

document.getElementById("mostrar").innerHTML =
  "<h2>texto escrito desde la app.js en el div 'mostrar</h2>";

document.getElementById("mostrar2").innerHTML =
  "<h3 style= 'color:green'>texto escrito desde la app.js en el div 'mostrar2'</h3>";

const nom = function nombre() {
  let nombre = window.prompt("introduce tu nombre");
  alert(nombre + " este es tu nombre");
  console.log(`${nombre} es el nombre`);
  document.getElementById("mostrar3").innerHTML = nombre;
};

let btn = document.getElementById("btn");

btn.onclick = nom;
