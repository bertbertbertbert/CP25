/* console.log(nombreCliente);
console.log(nombreClienteA); */
//1, Esto nos puede llevar a variables que se mezclen con otras en especial si el codigo es mantenido por multiples personas, es voluminoso o tambien si decidimos implementar librerias.

//la solucion es agrupar cada archivo en lo que conoce como un IIFE (Immediately Invoked Function Expression)
//2, para mejorar esa forma de uso con las IIFE, usaremos modulos , que nos permite importar y exportar parte del codigo segun nuestras necesidades : ejemplo de importacion de nombreCliente

import { nombreCliente, ahorro } from "./cliente.js";
import { Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarDatos());

let nombreEmpresa = 'International holding';
let ahorroEmpresa = 200000000;
let categoriaEmpresa = 'Construcción';

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoriaEmpresa);
console.log(empresa.mostrarDatos());

console.log(empresa.nombre);
