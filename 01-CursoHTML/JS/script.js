/* function mouseOver() {
  var url = "www.google.com";
  window.open(url, "_blank");
}
 */
/* var formulario = document.getElementById("formulario");
var nombre = formulario.nombre.value;
var tuNombre = document.getElementById("tuNombre");
var enviar = formulario.enviar.addEventListener("submit", (event) => {
  event.preventDefault();
  nombreAMostrar = nombre.value;
  tuNombre.innerHTML = nombreAMostrar;
}); */

var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre"); // Usamos id para acceder al campo de nombre
var tuNombre = document.getElementById("tuNombre");

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
  var nombreAMostrar = nombre.value; // Accedemos al valor del campo
  tuNombre.innerHTML = nombreAMostrar; // Mostramos el nombre en el lugar adecuado
});
