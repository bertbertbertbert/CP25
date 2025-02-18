import { btn1, mostra, obtenerTexto } from "./texto.js";
import { btn2, obtenerHTML, obtenerDatos } from "./unEmpleado.js";
import { btn3, obtenerHTML as obtenerHTML2, obtenerDatos as obtenerDatos2 } from "./empleados.js";
import { btn4, miHTML, obtDatos } from "./picsum.js";
import { btn5, miHTML as miHTML2, obtDatosUsers } from "./addUsers.js";
import { btn6, obtenerEmpleado, obtDatos as obtDatos3 } from "./pedirEmpleado.js";


btn1.addEventListener("click", obtenerTexto);
btn2.addEventListener("click", obtenerDatos);
btn3.addEventListener("click", obtenerDatos2);
btn4.addEventListener("click", obtDatos);
btn5.addEventListener("click", obtDatosUsers);
btn6.addEventListener("click", obtDatos3);