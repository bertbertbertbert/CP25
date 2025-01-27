
let buttons = document.getElementsByTagName("button");
for(let button of buttons){
  button.style.display="none";
}
confirm(("esta pagina utiliza cookies? (True=Sí, False=NO) :"+navigator.cookieEnabled));
mostrar.innerHTML=`Para continuar navegando, debes acceptar las cookies<br>`
for(let button of buttons){
  button.style.display="block";
}

document.querySelector("#aceptar").addEventListener("click", aceptar)
function aceptar(){
  mostrar.innerHTML="Gracias por aceptar las cookies"
  for(let button of buttons){
      button.style.display="none";
  }
}
document.querySelector("#rechazar").addEventListener("click", rechazar)
function rechazar(){
location.replace("https://www.google.es");
}