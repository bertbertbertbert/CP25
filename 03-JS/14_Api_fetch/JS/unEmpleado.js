export const btn2 = document.querySelector('#btn2');

export let obtenerHTML = (empleado) => {
  mostra.innerHTML = "";
  const usuario = `
    <p>Empleado: ${empleado.nombre}</p>
    <p>ID: ${empleado.id}</p>
    <p>Empresa: ${empleado.empresa}</p>
    <p>Trabajo: ${empleado.puesto}</p>
  `;
  mostra.innerHTML = usuario;
};

export const obtenerDatos = () => {
  fetch('./server/empleado.json')
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      obtenerHTML(response);
      /* if (!response.ok) throw new Error('Error al obtener los datos'); */
    })
    .catch((error) => {
      console.log('There was a problem with the fetch operation:', error);
    });
};

