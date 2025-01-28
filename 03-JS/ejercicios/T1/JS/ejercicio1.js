console.log("empieza el bucle for");
esNumero();
for (let i = num; i >= 0; i--) {
  console.log(i);
}

esNumero();
console.log("empieza el bucle while");
while (num >= 0) {
  console.log(num);
  num--;
}

esNumero();
console.log("empieza el bucle do while");
do {
  console.log(num);
  num--;
} while (num >= 0);
{
}
salirONo();
//funcion para comprobar que introducen un numero
function esNumero() {
  num = Number(prompt("introduce un número para el bucle for"));
  while (!Number(num)) {
    alert(`introduce un carácter numérico, por favor.`);
  }
}
