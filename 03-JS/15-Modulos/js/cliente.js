/* const nombreClienteA = 'Juan';
let ahorro = 200;
 */

// eesta forma evitará que estas variables definidas en este archivo se puedan mezclar con las de otros archivos... y su sintaxis es la siguiente:
/* (function () { */
/*   const nombreCliente = 'Juan'; */
/*   let ahorro = 200; */
//evitamos que este codigo se mezcle con otras variables, el problema es que encapsula el codigo, y para hacrlo accesible desde otros archivos debemos elevarlo el ámbito de este codigo al window del navegador.
/* 
  window.nombreCliente = 'Juan, Alberto';
})();
 */

//para no tener ggrandes cantidades de codigo dentro de una IIFE, ni confilctos de ambito son muy utiles los modulos y 2 palabras, export e import...

export const nombreCliente = 'Pepe';
export let ahorro = 200;
//podemos exportar e importar todo tipo de datos

export function mostrarDatos(nombre, ahorro) {
  return `cliente ${nombre} - Ahorro: ${ahorro}`;
}


export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }
  mostrarDatos() {
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
  }
}