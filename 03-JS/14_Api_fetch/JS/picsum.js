export const btn4 = document.querySelector('#btn4');


//funcion que manejará los datos obtenidos
export const obtenerHTML = (datos) => {
  mostra.innerHTML = "";
  let html = `<h4> Usuarius Pocsum </h4>`;
  datos.forEach((dato) => {
    const { author, url, download_url } = dato;
    html += `<p> Author: ${author}</p> <img src="${download_url}" width="200"/> </br> <a href="${download_url}" target="new">descargar</a>`;

  });
  mostra.innerHTML = html;
}

//funcion que hace la llamada a la API y obtiene los datos o devuelve error, y ejecuta la funcion que maneja los datos con los datos como atributo
export const obtenertDatos = () => {
  fetch('https://picsum.photos/v2/list?page=2&limit=50')
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error('Error de la solicitud');
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      obtenerHTML(response);
    })
    .catch((error) => {
      console.log(error);
      mostra.innerHTML = "Error";
    });
};

