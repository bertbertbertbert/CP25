let numero = 0;
let intentos = 0;
do {
  intentos++;
  numero = Number(prompt(`Introduce un número igual o mayor a 50`));
  if (!Number(numero)) {
    alert("Dato incorrecto, vuelve a introducir un número");
  } else if (numero < 50) {
    alert(`el número ${numero} es menor a 50. Vuelve a intentarlo`);
  }
} while (!Number(numero) || numero < 50);

/* diferentes maneras de crear los if */

/* if (isNaN(numero) || numero == " ") intentos = intentos;
else intentos++; */

/* (isNaN(numero) || numero == " ") ? contador = contador : contador++; */

alert(
  `Felicidades! Lo conseguiste! El numero ${numero} es igual o mayor a 50. Has necesitado ${intentos} intentos para introducir un número igual o mayor a 50`
);

mostrar.innerHTML = `Recuerda que si quieres puedes volver a jugar clicando en el link de abajo`; //utilizamos el "#mostrar" capturado en el archivo scripts para capturarlo solo una vez y reutilizarlo cuantas veces haga falta

salirONo(); //llamamos a la funcion creada en el archivo/biblioteca "scripts" para poder reutilizarla cuantas veces haga falta en otros archivos
