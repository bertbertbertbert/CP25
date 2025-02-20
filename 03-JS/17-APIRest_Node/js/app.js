
const d = document;
const cargarUsuarios = d.querySelector("#usuarios");
const mostrar = d.querySelector("#contenido");
const fragmento = d.createDocumentFragment();
const formTemplate = d.querySelector("#form-template").content;
const template = d.querySelector("#crud-template").content;
const tabla = formTemplate.querySelector(".crud-table tbody");

const mostrarEmpleados = ((empleados) => {
  mostrar.innerHTML = "";
  empleados.forEach(empleado => {
    let clone = d.importNode(template, true);
    clone.querySelector(".id").textContent = empleado.id;
    clone.querySelector(".name").textContent = empleado.nombre;
    clone.querySelector(".empresa").textContent = empleado.empresa;
    clone.querySelector(".puesto").textContent = empleado.puesto;
    clone.querySelector(".edit");
    clone.querySelector(".delete");
    fragmento.appendChild(clone);
  });
  tabla.appendChild(fragmento);
  mostrar.appendChild(formTemplate);
})

const obtListaEmpleados = () => {
  fetch("http://localhost:3000/users")
    .then((response) => {
      if (!response.ok) throw new Error("error en la solicitud");
      return response.json();
    })
    .then((data) => {
      console.log(data);
      mostrarEmpleados(data);
    })
    .catch((error) => {
      console.log("error a cargar los empleados", error);
    });
};

cargarUsuarios.onclick = () => {
  obtListaEmpleados();
}

