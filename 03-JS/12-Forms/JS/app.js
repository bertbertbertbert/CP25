
const m1 = document.querySelector("#mostrar1");
const m2 = document.querySelector("#mostrar2");
const error = document.querySelector("#error");
const form = document.firstContact;

const pdni = /^[XYZ]?\d{7,8}[A-Z]{1}$/;

form.addEventListener("submit", (e) => {
  const myDni = c_dni();
  const myEdad = edad();

  if (!myDni || !myEdad) {
    e.preventDefault();
    error.innerHTML = "Por favor, corrige los errores.";
    error.style.color = "red";
    return false;
  }
});

const c_dni = () => {
  let rdni = form.dni.value;
  rdni = rdni.toUpperCase();
  let numero, unaLetra;
  let result = rdni.match(pdni);
  let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (result) {
    numero = rdni.substr(0, rdni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);
    unaLetra = rdni.substr(rdni.length - 1, 1);
    numero = numero % 23;
    letra = letra.substring(numero, numero + 1);
    if (letra !== unaLetra) return false;
    return true;
  } else {
    return false;
  }
};

const edad = () => {
  let fechaNacimiento = form.miEdad.value;
  let fechaNace = new Date(fechaNacimiento);
  let fechaActual = new Date();
  let mi_edad = Math.floor((fechaActual - fechaNace) / (365.25 * 24 * 60 * 60 * 1000));
  if (mi_edad >= 18 && mi_edad <= 100) {
    return true;
  } else {
    return false;
  }
};

const pasaValor = (event) => {
  let result;
  switch (event.target.name) {
    case "miEdad":
      result = edad();
      if (result) {
        m1.innerHTML = "Tienes más de 18 años";
        form.miEdad.style.border = "solid 1px green";
        error.innerHTML = "";
      } else {
        m1.innerHTML = "No puedes registrarte, eres menor de edad o tienes más de 100 años";
        form.miEdad.style.border = "solid 1px red";
        error.innerHTML = "";
      }
      break;

    case "dni":
      result = c_dni();
      if (result) {
        m2.innerHTML = "DNI válido";
        form.dni.style.border = "solid 1px green";
        error.innerHTML = "";
      } else {
        m2.innerHTML = "DNI o NIE no válido";
        form.dni.style.border = "solid 1px red";
      }
      break;
  }
};

const listeners = [form.dni, form.miEdad];
listeners.forEach((listener) => {
  listener.addEventListener("keyup", pasaValor);
});
