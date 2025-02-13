/* localStorage - sessionStorage
ambos objetos de manacenaje preveen los mismos metodos y propiedades.

API:
setitem (clave, valor) guarda pares clave/valor,
getitem (clave) coge el valor de una clave
removeItem (clave) borra una clave con su valor.
key(indice) coge la clcave de una posicition determinada
length - el numero de items almacenadas
utiliza object.keys para conseguir todas las claves


localStorage -sesionStorage
tanto la calve como el valor deben ser strings.
el limite es de más de 5mb aprox dependiendo del navegador
los datos estan vinculados al origen (dominio/puerto/protocolo)
LocalStorage mantiene datos entre todas las pestañas y ventanas que tengan el mismo origen, sobrevive a los reinicios del navegador
SessionStorage es solo accesisble en una pestaña del navegador, incluyendo iframes del mismo origen

LocalStorage no expira
sessionStorage expira al cerrar la pestaña
*/



const boton = document.querySelector("#grabar");
const indice = document.querySelector("#clave");
const val = document.querySelector("#texto");
const cajadatos = document.querySelector("#cajadatos");

const eliminarTodo = () => {
  if (confirm("Seguro?")) {
    sessionStorage.clear();
    mostrar();
  }
}

const eliminar = (clave) => {
  sessionStorage.removeItem(clave);
  mostrar();
}

const mostrar = () => {
  cajadatos.innerHTML = `<div> <input type="button" onclick= "eliminarTodo()" value="Eliminar todo"> </div>`;
  for (let f = 0; f < sessionStorage.length; f++) {
    let valor = sessionStorage.getItem(sessionStorage.key(f));
    let clave = sessionStorage.key(f);
    cajadatos.innerHTML += `<div> ${clave} - ${valor} <br> <input type="button" onclick="eliminar('${clave}')" value="Eliminar"> </div>`;
  }
}

const iniciar = () => {
  boton.addEventListener("click", () => {
    let clave = indice.value;
    let valor = val.value;

    if (clave && valor) {
      sessionStorage.setItem(clave, valor);
      indice.value = "";
      val.value = "";
      mostrar();
    } else {
      alert("Por favor, ingrese tanto la clave como el valor.");
    }
  });
  console.log(sessionStorage)
};

window.addEventListener("load", iniciar);