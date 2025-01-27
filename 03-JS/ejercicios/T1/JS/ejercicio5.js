let num1 = Number(prompt("introduce un numero"));
let num2 = Number(prompt("introduce un segundo numero"));
num1.trimp().replace(",", ".");
num2.trimp().replace(",", ".");

if (!Number(num1) || !Number(num2)) {
  alert("Error, vuelve a introducir los números");
  location.reload();
} else {
  if (num1 > num2) {
    alert(`el número ${num1} es mayor que el número ${num2}`);
  } else if (num1 < num2) {
    alert(`el número ${num2} es mayor que el número ${num1}`);
  } else {
    alert(
      `el número ${num2} es igual al segundo número introducido  "${num1}"`
    );
  }
}
salirONo();
