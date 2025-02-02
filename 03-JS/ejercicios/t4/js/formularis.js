const form = document.formulari;
const mostrar = document.querySelector("#areaTexto");
const btnRegistro = document.querySelector("#btnRegistrate");
const btnGuardar = document.querySelector("#btnGuardar");
const btnRecuperar = document.querySelector("#btnRecuperar");
const btnLimpiar = document.querySelector("#btnLimpiar");
const dniPattern = /^[XYZ]?\d{7,8}[A-Z]{1}$/;
const emailPattern = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;

btnGuardar.disabled= true;

//funcion, enviar/no enviar si hay algun false
btnRegistro.addEventListener("click" /* "submit" */, (event) => {
  const vNombre = nombre();
  const vEdad = edad();
  const vTel = telefono();
  const vEmail = email();
  const vDni = dni();
  const vConsent = consent();
  if (!vNombre || !vEdad || !vTel || !vEmail || !vDni || !vConsent) {
    event.preventDefault();
    mostrar.innerHTML = "Datos introducidos incorrectamente";
    mostrar.style.color = "red";
  } else {
    mostrar.innerHTML = "Datos introducidos correctamente";
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
    return true
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

function habilitarBtnGuardar(){
  if(nombre() && telefono() && edad() && email() && dni()){
    btnGuardar.disabled= false;
  }else{
    btnGuardar.disabled=true;
  }
}


const listeners = [form.nombre, form.telefono, form.email, form.dni];
listeners.forEach((listener) => {
  listener.addEventListener("keyup", pasaValor);
  listener.addEventListener("keyup", habilitarBtnGuardar);
});


//funciones cookies
function cookiesStringToArray() {
  let cookiesArray = document.cookie.split(";");
  return cookiesArray;
}

btnGuardar.onclick = () => {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].name && form.elements[i].name !== "condiciones" &&form.elements[i].name !== "btnGuardar")
      if (form.elements[i].value === "") {
        document.cookie = "cookie_for" + form.elements[i].name + "_is=" + "" + ";";
      } else {
        document.cookie = "cookie_for" + form.elements[i].name + "_is=" + form.elements[i].value + ";";
      }
  }
  alert("Sus datos se han guardado satisfactoriamente");
  location.reload();
}

btnRecuperar.onclick=() =>{
  let cookies = cookiesStringToArray();

  for(let i=0; i<cookies.length; i++){
    if (form.elements[i].name && form.elements[i].name !== "condiciones"){
      let cookie=cookies[i];
      let cookieValue=cookie.split("=")[1];
      form.elements[i].value=cookieValue;
    }else{
      alert="Error al recuperar los datos";
    }
  }
}

btnLimpiar.onclick = () => {
  let cookies = cookiesStringToArray();

  if(cookies==""){
    alert("No hay datos guardados")

  }else{let confimrar = confirm("Vas a borrar tus datos. Estás seguro/a?");

    if(confimrar){
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let cookieSpearada = cookie.split("=");
        let cookieNombre = cookieSpearada[0].trim();
        document.cookie = cookieNombre + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/03-JS/ejercicios/t4;";
        console.log("Borrada cookie:", cookieNombre);}
        alert("Sus datos se han borrado sadisfactoriamente");
    }
  }
  window.location.reload();
}