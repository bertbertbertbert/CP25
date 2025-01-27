console.log("empieza el bucle for");
let factorial = 1;
let num = Number(prompt("introduce un número para el bucle for"));

for (let i = 1; i <= num; i++) {
  factorial *= i;
  console.log(factorial);
}

console.log("empieza el bucle while");
num = Number(prompt("introduce un número para el bucle while"));
factorial = 1;
while (num >= 1) {
  factorial *= num;
  console.log(factorial);
  num--;
}

console.log("empieza el bucle do while");
num = Number(prompt("introduce un número para el bucle do while"));
factorial = 1;
do {
  factorial *= num;
  console.log(factorial);
  num--;
} while (num >= 1);
salirONo();
