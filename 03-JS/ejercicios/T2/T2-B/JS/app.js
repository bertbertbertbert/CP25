let mostrar = document.querySelector("#mostrar");






//ejercicio 17 Crea un programa que permeti saber a mil·lisegons quan va acabar el món segons el calendari Maya, recull a més el dia, mes, any, hora, minuts, segons actuals i dia de la setmana.

let date = new Date();
let mayas = new Date("2012-12-12")
let finMundoMaya = date.getTime() - mayas.getTime();

let segundos = date.getSeconds();
let minutos = date.getMinutes();
let horas = date.getHours();
let mes = date.getMonth() + 1;
let diaSemana = date.getDay() + 1;

document.querySelector("#mostrarFechas").innerHTML = `Hoy hace ${finMundoMaya} milisegundos que acabó el mundo según los mayas. <br>
La hora actual es ${horas}:${minutos}:${segundos}. Es el día de la semana número ${diaSemana} y el mes número ${mes}.`

//ejercicio 18
document.querySelector("#mostrarMilisegundos1970").innerHTML = `Han pasado ${date.getTime()} desde el 1 de enero de 1970.`
