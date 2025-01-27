let nombre = "alberto";
let apellido = "hernandez";
const PI = 3.1416;
const saludo = `bienvenido ${nombre} ${apellido} a nuestra aplicacion`;
const mostrar = document.querySelector("#mostrar");
const mostrarLlista = document.querySelector("#mostrarLlista");

const primavera = "Primavera";
const verano = "Verano";
const invierno = "Invierno";
const otoño = "Otoño";

const estaciones = `<ul>
                       <li>${primavera}</li>
                       <li>${verano}</li>
                       <li>${invierno}</li>
                       <li>${otoño}</li>
                    </ul>`;

mostrar.innerHTML = "saludo";
mostrarLlista.innerHTML = estaciones;
