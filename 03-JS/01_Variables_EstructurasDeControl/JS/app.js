/* Reglas para variables var y let  */

var nombre = "contenido"; /* variables de ambito global. se puede redeclarar  */
var nombre = "contenido2"; /* esto es redeclarar */
nombre = "contenido3"; /* esto es solo cambiarle el valor */

let monitor = "pantalla de 21 pulgadas"; //iniciamos variable con valor, let  es de ambito de bloque. se entiende por bloque el juego de {} al que pertenezca
//let monitor = 'pantall de 21 pulgadas'; no se puede redeclarar;

//var y let se puede reasignar (cambiar el valor)
monitor = "pantalla de 26 pulgadas";

//podemos cambiar el tipo de dato;

monitor = 25;
console.log(monitor);

monitor = true;
console.log(monitor);

monitor = null;
console.log(monitor);

//JS es un lenguaje de tipo dinámico. No se especifican tips de datos cuando se crea la variable, sino al asignar el valor. De tipado débil. (PERMITE POR EJEMPLO NO ACABAR LAS SENTENCIAS CON ";" Y LO DA POR SUSUESTO)

let precio = 200;
console.log(precio);

// tambien se puede inicializar una variable sin valor y asignarlo despues;

let disponible;
console.log(disponible);
disponible = true;
console.log(disponible);

//se pueden inicializar varias varlaibles a la vez

let tipo = "sobremesa",
  fabricante = "sin nombre",
  valoracion = 5;

console.log(tipo);
console.log(fabricante);
console.log(valoracion);

// reglas de las variables
// peden ener letras, numeros y guiones bajos. no pueden iniciarse con un numero.
// nombrar varabiles con mas de una palabra

/* let nombrePrecio = "Monitor 20 pulgadas";  */ // camelCase habitual en funciones arreglos y variables

let nombre_producto = "Monitor de 30 pulgadas"; //underscore habitual en variables
let NombreProducto = "monior 30 pulgadas"; //pascal case habitual en objetos y clases
let nombreproducto = "monitor de 30 pulgadas"; // habitual en variables
