const d = document;
const cargarUsuarios = d.querySelector("#usuarios");
const btnBuscar = d.querySelector("#buscarBtn");
const mostrar = d.querySelector("#contenido");
const fragmento = d.createDocumentFragment();
const formTemplate = d.querySelector("#form-template").content;
const template = d.querySelector("#crud-template").content;
const id=d.querySelector("#id");
/* const formTemplate = d.querySelector(".crud-table tbody"); */

const encontrarEmpleado=((empleados)=>{
  form=d.querySelector("#crud-form");
  empleados.forEach(empleado =>{
    if(id.value==empleado.id){
      form.nombre.value=empleado.nombre;
      form.empresa.value=empleado.empresa;
      form.puesto.value=empleado.puesto;
      d.querySelector("#error").innerHTML="";
    }
  })
})

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
  formTemplate.appendChild(fragmento);
  mostrar.appendChild(formTemplate);
})

const obtListaEmpleados = () => {
  fetch("/03-JS/14_Api_fetch/server/db.json")
    .then((response) => {
      if (!response.ok) throw new Error("error en la solicitud");
      return response.json();
    })
    .then((data) => {
      console.log(data);
      mostrarEmpleados(data.users);
      encontrarEmpleado(data.users);
    })
    .catch((error) => {
      console.log("error a cargar los empleados", error);
    });
};

cargarUsuarios.onclick = () => {
  obtListaEmpleados();
}
btnBuscar.onclick = ()=>{
  obtListaEmpleados();
}