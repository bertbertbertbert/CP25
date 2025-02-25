const d = document;
const cargarUsuarios = d.querySelector("#usuarios");
const btnBuscar = d.querySelector("#buscarBtn");
const mostrar = d.querySelector("#contenido");
const fragmento = d.createDocumentFragment();
const formTemplate = d.querySelector("#form-template").content;
const template = d.querySelector("#crud-template").content;


const mostrarEmpleados = ((empleados) => {
  mostrar.innerHTML = "";
  const formClone = d.importNode(formTemplate, true);
  mostrar.appendChild(formClone);
  const tabla = d.querySelector(".crud-table tbody");
  tabla.innerHTML = "";
  empleados.forEach(empleado => {
    let clone = d.importNode(template, true);
    clone.querySelector(".id").textContent = empleado.id;
    clone.querySelector(".name").textContent = empleado.nombre;
    clone.querySelector(".empresa").textContent = empleado.empresa;
    clone.querySelector(".puesto").textContent = empleado.puesto;
    clone
      .querySelector(".edit")
      .addEventListener("click", () => editarEmpleado(empleado));
    clone
      .querySelector(".delete")
      .addEventListener("click", () => eliminarEmpleado(empleado.id));
    fragmento.appendChild(clone);
  });
  tabla.appendChild(fragmento);
})

d.addEventListener("submit", async (e) => {
  if (e.target.matches("#crud-form")) {
    e.preventDefault();

      fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        numeroEmpleados = data.length;
      })
      .catch((error) => console.log("Error al obtener empleados", error));

    let id;
    if (e.target.id.value) {
      id = e.target.id.value;
    } else {
      id =  numeroEmpleados + 1;
    }
    console.log(id);
    
    const empleado = {
      id: id,
      nombre: e.target.nombre.value,
      empresa: e.target.empresa.value,
      puesto: e.target.puesto.value,
    };


    let url = "http://localhost:3000/users";
    let method = "POST";

    if (e.target.id.value) {
      url += `/${e.target.id.value}`;
      method = "PUT";
    }

    try {
      let res = await fetch(url, {
        method: method,
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(empleado),
      });

      if (!res.ok) throw new Error("Error en la solicitud");

      alert(`Empleado ${e.target.id.value ? "editado" : "añadido"} correctamente`);

      obtListaEmpleados();
      e.target.reset();
      e.target.id.value = "";

    } catch (error) {
      console.log(error);
    }
  }
});

const editarEmpleado = (empleado) => {
  const form = d.querySelector("#crud-form");
  form.id.value = empleado.id;
  form.nombre.value = empleado.nombre;
  form.empresa.value = empleado.empresa;
  form.puesto.value = empleado.puesto;
}

const eliminarEmpleado = (id) => {
  if (confirm("Seguro que quiere eliminar?")) {
    fetch(`http://localhost:3000/users/${id}`, { method: "DELETE", })
      .then((response) => {
        if (!response.ok) throw new Error("Error en la solicitud");
        return response.json();
      })
      .then(() => {
        alert("Empleado eliminado");
        obtListaEmpleados();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
};

const obtListaEmpleados = () => {
  fetch("http://localhost:3000/users/")
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
