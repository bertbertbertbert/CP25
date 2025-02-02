var resetBtn = document.querySelector(".reset-btn");
const divPadre = document.querySelector(".inputs");
var inputLetra = document.querySelector(".lletra");
var mostrarPista = document.querySelectorAll(".pista span");
let vidas = document.querySelector(".restantes span")

/* function empezarJuego(){ */
vidas=7;
const listaDivs=[];
inputLetra.focus();

for (let i = 0; i < arrayPalabra.length; i++) {
	const div = document.createElement("div");
	const letra = document.createTextNode(arrayPalabra[i]);

    div.appendChild(letra);
	divPadre.appendChild(div);   

    div.style.visibility = "hidden";
    listaDivs.push(div);
}
/* }  */

function compararLetras() {
    let letraIntroducida = inputLetra.value;  

    for(let i=0; i<arrayPalabra.length; i++){

    if (arrayPalabra[i]===letraIntroducida){
       listaDivs[i].style.visibility="visible";
    } else {
        console.log("NO");
        vidas--;
        console.log(vidas);
    }
    
    inputLetra.value = "";
}
}
resetBtn.onclick = ()=>location.reload();
inputLetra.addEventListener("keyup", compararLetras); 


