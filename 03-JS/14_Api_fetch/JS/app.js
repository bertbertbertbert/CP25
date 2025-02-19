import { btn1, mostra, obtenerTexto } from "./texto.js";
import { btn2, obtenerHTML, obtenerDatos } from "./unEmpleado.js";
import { btn3, obtenerHTML as obtenerHTML2, obtenerDatos as obtenerDatos2 } from "./empleados.js";
import { btn4, obtenerHTML as obtenerHTML3, obtenertDatos as obtenerDatos3 } from "./picsum.js";
import { btn5, obtenerHTML as obtenerHTML4, obtenerDatos as obtenerDatos4 } from "./addUsers.js";
import { btn6, obtenerHTML as obtenerHTML5, obtenerDatos as obtenerDatos5 } from "./pedirEmpleado.js";


btn1.addEventListener("click", obtenerTexto);
btn2.addEventListener("click", obtenerDatos);
btn3.addEventListener("click", obtenerDatos2);
btn4.addEventListener("click", obtenerDatos3);
btn5.addEventListener("click", obtenerDatos4);
btn6.onclick = ()=> obtenerDatos5(2);