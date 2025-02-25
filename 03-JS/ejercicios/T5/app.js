const paises = document.querySelectorAll('#pais option');
const ciudad = document.querySelector('#ciudad');
const info = document.querySelector("#info")
const btn = document.querySelector('#btn');
const mostraError = document.querySelector('#error')
const tempActual = document.querySelector('#tempActual');
const tempMax = document.querySelector('#tempMax');
const tempMin = document.querySelector('#tempMin');
let paisSeleccionado;
let ciudadSeleccionada;

//obtenemos foto random para el fondo cada vez que se hace click en el boton, desde picsum
const obtenertFoto = () => {
  fetch('https://picsum.photos/v2/list?page=2&limit=100')

    .then((response) => {
      if (!response.ok) {
        throw new Error('Error de la solicitud');
      }
      return response.json();
    })
    .then((response) => {
      let num = Math.floor(Math.random() * 101)
      document.body.style.backgroundImage = `url(${response[num].download_url})`;
    })
    .catch((error) => {
      console.log(error);
    });
};

//obtenemos valores de select e input y los validamos 
const ciudadYPais = () => {
  paises.forEach(pais => {
    if (pais.selected) {
      paisSeleccionado = pais.value;
    }
  });
  ciudadSeleccionada = ciudad.value;
  ciudadSeleccionada = ciudadSeleccionada.charAt(0).toUpperCase() + ciudadSeleccionada.slice(1);
  mostraError.innerHTML = "";
}


//presentamos las temperaturas recogidas 
const presentarTemperatura = (datos) => {
  info.style.backgroundColor = " rgb(255, 252, 96)";
  tempActual.innerHTML = "La temperatura actual en " + ciudadSeleccionada + " es de " + Math.floor((datos.main.temp - 273)) + "C";
  tempMax.innerHTML = "La temperatura máxima es de " + Math.floor((datos.main.temp_max - 273)) + "C";
  tempMin.innerHTML = "La temperatura mínima en es de " + Math.floor((datos.main.temp_min - 273)) + "C";
}

//recogemos las teperaturas recogidas desde la API
const obtenerDatos = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadSeleccionada},${paisSeleccionado}&appid=c425aa48584ba8ac76b6ec738a35b2fe`)

    .then((response) => {
      if (!response.ok) {
        throw new Error('Error de la solicitud');
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      presentarTemperatura(response);
    })
    .catch((error) => {
      console.log(error);
      mostraError.innerHTML = error;
    });
};

btn.onclick = () => {
  obtenertFoto();
  ciudadYPais();
  obtenerDatos(); 
}

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    ciudadYPais();
    obtenerDatos();
  }
});

window.onload = () => {
  ciudad.value = "";
  obtenertFoto();
}

