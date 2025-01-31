const form = document.formulari;
const mostrar = document.querySelector("#areaTexto");
const btnRegistro = document.querySelector("#btnRegistrate");
const numeroPattern = /^[0 - 9]$/;
const dniPattern = /^[XYZ]?\d{7,8}[A-Z]{1}$/;
const emailPattern = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;

//funcion, comporbar todo correcto
btnRegistro.addEventListener("click" /* "submit" */, (event) => {
  alert("hola");
  const vNombre = nombre();
/*   const vEdad = edad();
 */  const vTel = telefono();
  const vEmail = email();
  const vDni = dni();
  const vConsent = consent();
  if (!vNombre /* || !vEdad  */|| !vTel || !vEmail || !vDni || !vConsent) {
    event.preventDefault();
    mostrar.innerHTML = "Datos introducidos incorrectamente"
    mostrar.style.color = "red";
  }else{
    mostrar.innerHTML = "Datos introducidos incorrectamente"
    mostrar.style.color = "green";
    
  }
});

const nombre = () => {
  let nombre = form.nombre.value;
  if (nombre = "" || nombre.charAt(0).match(numeroPattern) || nombre.length <= 3 || nombre.length >= 20) {
    console.log("fallo en nombre");
    return false;
  } else {
    return true;
  }
}

/* const edad = () => {
  let dia = form.dia.value;
  let mes = form.mes.value;
  let anio = form.anio.value;
  dia = parseInt(dia);
  mes = parseInt(mes);
  anio = parseInt(anio);
  let fechaNacimiento = new Date(mes, dia, anio);
  let fechaActual = new Date();
  let edadUsuario = (fechaActual - fechaNacimiento) / (365.25 * 24 * 60 * 60 * 1000);

  if (isNaN(dia) || dia.length === "" || isNaN(mes) || mes === "" || isNaN(anio) || dia === "") {
    return false;
  } else {
    if (edadUsuario < 18 || edadUsuario > 99) {
      return false;
    } else {
      true
    }
  }
} */

const telefono = () => {
  let telefono = form.telefono.value;
  telefono = parseInt(telefono);
  if (telefono === "" || isNaN(telefono) || !telefono.length === 9) {
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
    if (letra !== unaLetra){console.log("fallo en dni letra");
    return false;}else{
    return true;}
  } else {
    console.log("fallo en dni numeros")
    return false;
  }
}; const consent = () => {
  let checked = form.condiciones.value;
  if (checked===false) {
    console.log("fallo en dni checked")
    return false;
  } else {
    return true;
  }
}