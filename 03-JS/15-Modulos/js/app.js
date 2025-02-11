/* console.log(nombreCliente);
console.log(nombreClienteA); */
//1, Esto nos puede llevar a variables que se mezclen con otras en especial si el codigo es mantenido por multiples personas, es voluminoso o tambien si decidimos implementar librerias.

//la solucion es agrupar cada archivo en lo que conoce como un IIFE (Immediately Invoked Function Expression)
//2, para mejorar esa forma de uso con las IIFE, usaremos modulos , que nos permite importar y exportar parte del codigo segun nuestras necesidades : ejemplo de importacion de nombreCliente

import { nombreCliente } from "./cliente.js";

/* console.log(nombreCliente);


const mostrarDatosCliente = mostrarDatos(nombreCliente, ahorro);
console.log(mostrarDatosCliente);  */

//creacion de una clase, modelo para construir objetos.

import { Cliente } from "./cliente.js";

const cliente = new Cliente(nombreCliente, 500);

console.log(cliente.mostrarDatos(), cliente.nombre, cliente.ahorro);