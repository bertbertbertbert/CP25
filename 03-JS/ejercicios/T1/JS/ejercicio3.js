let num = Number(prompt("Introduce la nota del alumno"));

while (!Number(num) || num > 10 || num < 0) {
  num = Number(prompt("Vuleve a introducir una nota válida "));
}
if (num >= 0 && num < 5) {
  console.log(`La nota del alumno es ${num} y está suspendido.`);
} else if (num >= 5 && num <= 6) {
  console.log(`La nota del alumno es ${num} y está aprobado.`);
} else if (num > 6 && num <= 7) {
  console.log(`La nota del alumno es ${num} y ha sacado un bien.`);
} else if (num > 7 && num <= 9) {
  console.log(`La nota del alumno es ${num} y ha sacado un notable.`);
} else if (num > 9 && num <= 10) {
  console.log(`La nota del alumno es ${num} y ha sacado un excelente.`);
} else {
  console.log("introduce una nota válida");
}

salirONo();
