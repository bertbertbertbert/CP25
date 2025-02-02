let btnEnviar = document.getElementById("btnENVIAR");
let btnMostrar = document.getElementById("btnMostrar");

btnEnviar.addEventListener("click", enviar);

function enviar(){
    sessionStorage.setItem("usuario", "alberto");
}

btnMostrar.addEventListener("click", mostrar);  // Aquí está la corrección

function mostrar(){
    alert(sessionStorage.getItem("usuario"));
}
