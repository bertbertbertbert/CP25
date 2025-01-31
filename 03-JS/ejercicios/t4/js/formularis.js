const form = document.formulari;
const mostrar = document.querySelector("#areaTexto");
const btnRegistro = document.querySelector("#btnRegistrate");
const btnGuardar = document.querySelector("#btnGuardar");
const dniPattern = /^[XYZ]?\d{7,8}[A-Z]{1}$/;
const emailPattern = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;

//funcion, enviar/no enviar si hay algun false
btnRegistro.addEventListener("click" /* "submit" */, (event) => {

  event.preventDefault();
  const vNombre = nombre();
  const vEdad = edad();
  const vTel = telefono();
  const vEmail = email();
  const vDni = dni();
  const vConsent = consent();
  if (!vNombre || !vEdad || !vTel || !vEmail || !vDni || !vConsent) {
    event.preventDefault();
    mostrar.innerHTML = "Datos introducidos incorrectamente"
    mostrar.style.color = "red";
  } else {
    mostrar.innerHTML = "Datos introducidos incorrectamente"
    mostrar.style.color = "green";

  }
});

//funciones validaciones
const nombre = () => {
  let nombre = form.nombre.value;
  if (nombre = "" || nombre.charAt(0).match(/\d/) || nombre.length <= 3 || nombre.length >= 20) {
    console.log("fallo en nombre");
    return false;
  } else {
    return true;
  }
}

const edad = () => {
  let dia = form.dia.value;
  let mes = form.mes.value;
  let anio = form.anio.value;
  dia = parseInt(dia);
  mes = parseInt(mes) - 1;
  anio = parseInt(anio);
  let fechaNacimiento = new Date(anio, mes, dia);
  let fechaActual = new Date();
  console.log(fechaActual);
  console.log(fechaNacimiento);
  let edadUsuario = (fechaActual - fechaNacimiento) / (365.25 * 24 * 60 * 60 * 1000);
  edadUsuario = parseInt(edadUsuario);
  if (isNaN(dia) || dia.length === "" || isNaN(mes) || mes === "" || isNaN(anio) || dia === "" || edadUsuario < 18 || edadUsuario > 99) {
    return false;
  } else {
    true
  }
}

const telefono = () => {
  let telefono = form.telefono.value;
  telefono = telefono.replace(/-/g, "");
  telefono = telefono.replace(/ /g, "");
  if (telefono === "" || isNaN(telefono) || telefono.length !== 9) {
    console.log("fallo en telefono");
    return false;
  } else {
    return true;
  }
}

const email = () => {
  let email = form.email.value;
  email = email.toLowerCase();
  if (email === "" || !email.match(emailPattern)) {
    console.log("fallo en email");
    return false
  } else {
    return true;
  }
}
const dni = () => {
  let dni = form.dni.value;
  dni = dni.toUpperCase();
  let numero, unaLetra;
  let result = dni.match(dniPattern);
  let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

  if (result) {
    numero = dni.substr(0, dni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);
    unaLetra = dni.substr(dni.length - 1, 1);
    numero = numero % 23;
    letra = letra.substring(numero, numero + 1);
    if (letra !== unaLetra) {
      console.log("fallo en dni letra");
      return false;
    } else {
      return true;
    }
  } else {
    console.log("fallo en dni numeros")
    return false;
  }
}; const consent = () => {
  let checked = form.condiciones.checked;
  if (checked === false) {
    console.log("fallo en checked")
    return false;
  } else {
    return true;
  }
}

//funcion validar a cada keyup
const pasaValor = (event) => {
  let result;
  switch (event.target.name) {
    case "nombre":
      result = nombre();
      if (result) {
        mostrar.innerHTML = "Nombre válido";
        mostrar.style.color = "green";

      } else {
        mostrar.innerHTML = "Nombre no válido";
        mostrar.style.color = "red";
      }
      break;

    case "telefono":
      result = telefono();
      if (result) {
        mostrar.innerHTML = "Teléfono válido";
        mostrar.style.color = "green";

      } else {
        mostrar.innerHTML = "Teléfono no válido";
        mostrar.style.color = "red";
      }
      break;
    case "email":
      result = email();
      if (result) {
        mostrar.innerHTML = "Email válido";
        mostrar.style.color = "green";

      } else {
        mostrar.innerHTML = "Email no válido";
        mostrar.style.color = "red";
      }
      break;

    case "dni":
      result = dni();
      if (result) {
        mostrar.innerHTML = "DNI válido";
        mostrar.style.color = "green";
      } else {
        mostrar.innerHTML = "DNI o NIE no válido";
        mostrar.style.color = "red";
      }
      break;
  }
};

/* btnGuardar.onclick = () => {
 //posible manera de recoger los valores y de cada input y almacenarlos en una cookie
 console.log(form.elements[0].value); así llegamos al valor de cada input, lo recorremos con un for y para cada uno creamos una cookie
 podemos escribir una frase plantilla donde una parte sea el name y así creamos las cookies diferentes. las añadimos a un array (const) en orden.
 luego la podemos restaurar con otro for pero haciendo la inversa. 
 si no recoge valor el valor debe ser un =""(cadena vacia);
} */

for (let i = 0; i < form.elements.length; i++) {
  if (form.elements[i].name && form.elements[i].name !== "condiciones")
    document.cookie = "cookie_for" + form.elements[i].name + "_is=" + form.elements[i].value + "; path=/;";

}
const listeners = [form.nombre, form.telefono, form.email, form.dni];
listeners.forEach((listener) => {
  listener.addEventListener("keyup", pasaValor);
})
