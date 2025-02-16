const textosConZoom = document.querySelectorAll(".zoom");
const btnZoomIn = document.querySelector(".btnZoomIn");
const btnZoomOut = document.querySelector(".btnZoomOut");


contrasteAlto.onclick = () => document.body.classList.toggle("contrasteAlto");

console.log(textosConZoom);

btnZoomIn.onclick = ()=>{
    let tamañoMaximo = 30;
    for (let texto of textosConZoom) {
        console.log(texto);
        let tamañoActual = getComputedStyle(texto).fontSize;
        let tamañoActualNum = parseFloat(tamañoActual);
        let nuevoTamaño = tamañoActualNum + 2;

        if(nuevoTamaño <= tamañoMaximo){
        texto.style.fontSize = nuevoTamaño + "px";
    }else{
        texto.style.fontSize = tamañoMaximo + "px";
    }
}
}

btnZoomOut.onclick = ()=>{
    let tamañoMinimo = 16;
    for (let texto of textosConZoom) {
        let tamañoActual = getComputedStyle(texto).fontSize;
        let tamañoActualNum = parseFloat(tamañoActual);
        let nuevoTamaño = tamañoActualNum - 2;

        if(nuevoTamaño >= tamañoMinimo){
            texto.style.fontSize = nuevoTamaño + "px";
        }else{
            texto.style.fontSize = tamañoMinimo + "px";
        }
}
}
