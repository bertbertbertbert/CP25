var resetBtn = document.querySelector(".reset-btn");
const divPadre = document.querySelector(".inputs");
var inputLetra = document.querySelector(".lletra");
var mostrarPista = document.querySelector(".pista span");
let mostrarVidas = document.querySelector(".restantes span")

/* function empezarJuego(){ */

let vidas=7;
mostrarVidas.innerHTML=vidas;
mostrarPista.innerHTML=pista;
inputLetra.focus();
const listaDivs=[];
for (let i = 0; i < arrayPalabra.length; i++) {
	const div = document.createElement("div");
	const letra = document.createTextNode(arrayPalabra[i]); 

  div.appendChild(letra); 
	divPadre.appendChild(div);   
    listaDivs.push(div);
}

function compararLetras() {
    
    let letraIntroducida = inputLetra.value;  
    let letraEncontrada=false;
    for(let i=0; i<arrayPalabra.length; i++){

    if (arrayPalabra[i]===letraIntroducida){
        letraEncontrada=true;
       listaDivs[i].style.visibility="visible"; 
    }
}
inputLetra.value="";
if(!letraEncontrada){
    vidas--;
   }
   mostrarVidas.innerHTML=vidas;
}

resetBtn.onclick = ()=>location.reload();
inputLetra.addEventListener("keyup", compararLetras); 