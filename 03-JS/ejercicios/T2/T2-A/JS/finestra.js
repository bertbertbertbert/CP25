let mostrarHora = document.querySelector("#mostrarHora");


let pedirHora = new Date();

let hora = pedirHora.getHours();
let minutos = pedirHora.getMinutes();
let segundos = pedirHora.getSeconds();

function mensaje() {
  if (hora >= 6 && hora <= 14) {
    return "Bon dia";
  } else if (hora >= 14 && hora <= 20) {
    return "Bona tarda";
  } else {
    return "Bona nit";
  }
}
mostrarHora.innerHTML = `${hora}:${minutos}:${segundos}.` + mensaje();



titolPare = prompt("Introduce una nueva dirección html");

window.parent.location.href = titolPare;