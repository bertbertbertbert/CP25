export const btn6 = document.querySelector('#btn6');


export const obtenerEmpleado = ((empleado) => {
  mostra.innerHTML = `<p>Empleado: ${empleado.nombre}</p>
                      <p>ID: ${empleado.id}</p>
                      <p>Empresa: ${empleado.empresa}</p>
                      <p>Trabajo: ${empleado.puesto}</p>
                      <hr>`
});

export const obtenerDatosEmpleado = (id) => {
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
      obtenerEmpleado(empleado);
    })
    .catch((error) => {
      console.log(error);
    });
};

btn6.addEventListener("click", () => {
  obtenerDatosEmpleado(2);
});
