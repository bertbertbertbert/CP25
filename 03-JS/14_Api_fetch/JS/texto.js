export const btn1 = document.querySelector('#btn1');
export const mostra = document.querySelector('#mostra');

export const obtenerTexto = () => {
  fetch('./server/data.txt')
    .then((response) => {
      console.log(response);
      console.log(response.type);
      console.log('Content-Type:', response.headers.get("Content-Type"));
      console.log('Status:', response.status);
      console.log('Status Text:', response.statusText);
      console.log('URL:', response.url);
      return response.text();
    })
    .then((datos) => {
      console.log(datos);
      mostra.textContent = datos;
    })
    .catch((error) => {
      console.log(error);
    });
}
