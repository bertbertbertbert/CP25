export const btn3 = document.querySelector('#btn3');

export const obtenerHTML = (empleados) => {
  mostra.innerHTML = "";
  empleados.forEach(empleado => {
    const empleadoHTML = `
      <p>Empleado: ${empleado.nombre}</p>
      <p>ID: ${empleado.id}</p>
      <p>Empresa: ${empleado.empresa}</p>
      <p>Trabajo: ${empleado.puesto}</p>
      <hr>
    `;
    mostra.innerHTML += empleadoHTML;
  });
};

export const obtenerDatosEmpleados = () => {
  fetch('./server/empleados.json')
    .then((response) => {
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
    });
};

btn3.addEventListener("click", obtenerDatosEmpleados);