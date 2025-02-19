export const btn6 = document.querySelector('#btn6');


export const obtenerHTML = ((empleado) => {
  mostra.innerHTML = `<p>Empleado: ${empleado.nombre}</p>
                      <p>ID: ${empleado.id}</p>
                      <p>Empresa: ${empleado.empresa}</p>
                      <p>Trabajo: ${empleado.puesto}</p>
                      <hr>`
});

export const obtenerDatos = (id) => {
  fetch('./server/empleados.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error de la solicitud');
      }
      return response.json();
    })
    .then((empleados) => {
      const empleado = empleados.find((emp) => emp.id === id);
      console.log(empleado);
      obtenerHTML(empleado);
    })
    .catch((error) => {
      console.log(error);
    });
};

