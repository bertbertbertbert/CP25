mostrar = document.querySelector("#mostrar");
btnObrir = document.querySelector("#btnObrir");
btnTancar = document.querySelector("#btnTancar");
recoger = document.querySelector("#recoger");
btnEnviar = document.querySelector("#enviar");
btnCursiva = document.querySelector("#cursiva");
btnNegrita= document.querySelector("#negrita");
btnColorRojo = document.querySelector("#rojo");
btnGrande = document.querySelector("#grande");

//ejercicio 8
 document.title = "Esto es un cambio de título";
document.body.style.background ="grey";
document.body.style.color ="white";

//ejercicio 9
let amplada = screen.width;
let altura = screen.height;
let ampladaUtil = screen.availWidth;
let alturaUtil = screen.availHeight;
let diagonal = Math.sqrt(amplada**2 + altura**2);
mostrar2.innerHTML =`Amplada: ${amplada}. Altura: ${altura}. Aamplada útil: ${ampladaUtil}. Altura Útil: ${alturaUtil}. Diagonal ${diagonal}.`

//ejercicio 11
let titulo ="";
let ampladaFN = 400;
let alturaFN =200;
let atributosFinestraNova = `width=${ampladaFN}, height=${alturaFN}`

btnObrir.addEventListener('click',()=> {
ventanaNueva = window.open("index2.html", titulo, atributosFinestraNova);
ventanaNueva.document.title="Ventana Nueva";
ventanaNueva.document.write(atributosFinestraNova)
});

btnTancar.addEventListener('click', ()=>{
  ventanaNueva.close();
})

//ejercicio 12
document.querySelector("#enviarFrase").addEventListener("click", ()=>{
    let texto = document.querySelector("#recogerFrase").value;
    texto = texto.trim();
    if(texto.length>10){
        let ultimos5 = texto.slice((texto.length-5), texto.length);
        document.querySelector("#mostrar5ultimos").innerHTML = ultimos5;
    }
    
})
 
//ejercicio 13
let valor = recoger.value;

btnEnviar.addEventListener("click", ()=>{
    valor = recoger.value;
    valor = valor.length;
    mostrar.innerHTML = valor;
})

btnCursiva.addEventListener("click", ()=>{
    valor = recoger.value;
    mostrar.innerHTML = valor;
    mostrar.style.fontStyle ="italic";
})

btnNegrita.addEventListener("click", ()=>{
    valor = recoger.value;
    mostrar.innerHTML = valor;
    mostrar.style.fontWeight ="bold";
})

btnColorRojo.addEventListener("click", ()=>{
    valor = recoger.value;
    mostrar.innerHTML = valor;
    mostrar.style.color ="red";
})

btnGrande.addEventListener("click", ()=>{
    valor = recoger.value;
    mostrar.innerHTML = valor;
    mostrar.style.fontSize ="5rem";
}); 

//ejercicio 14
function funcionTabla() {
let mostrarTabla = document.querySelector("#mostrarTabla");
let tabla = `<table>
    <tr>
        <td> celda 1 </td>
        <td> celda 2 </td>
    </tr>
    <tr>
        <td> celda 3 </td>
        <td> celda 4 </td>
    </tr>
</table>`;
mostrarTabla.innerHTML = tabla;
let estiloTabla = document.querySelector("table");
estiloTabla.style.borderCollapse = "collapse";
estiloTabla.style.border = "1px solid black";
}
funcionTabla();

//ejercicio 15
btnTriangulo = document.querySelector("#btnTriangulo").addEventListener("click", ()=>{
    let area = (parseInt(document.querySelector("#baseTriangulo").value)*parseInt(document.querySelector("#alturaTriangulo").value)) /2;
    
    if (isNaN(area)){
        document.querySelector("#mostrarArea").innerHTML = "Introduce carácteres numéricos";
    }else{
    document.querySelector("#mostrarArea").innerHTML = area;
}
}) 

//ejercicio 16
let bombillaEncendida = document.querySelector("#encendida");
let bombillaApagada = document.querySelector("#apagada");

bombillaApagada.style.position="absolute";
bombillaEncendida.style.position="absolute";


document.querySelector("#switch1").addEventListener("click", ()=>{
bombillaEncendida.classList.toggle("cambiarEstado"); //cambia estado con solo un botón
})

let contador=1;
document.querySelector("#switch2").addEventListener("click", ()=>{
contador++;
contador%2===0?bombillaEncendida.style.visibility="hidden":bombillaEncendida.style.visibility="visible";
})

//ejercicio 17 Crea un programa que permeti saber a mil·lisegons quan va acabar el món segons el calendari Maya, recull a més el dia, mes, any, hora, minuts, segons actuals i dia de la setmana.

let date = new Date();
let mayas = new Date("2012-12-12")
let finMundoMaya = date.getTime() - mayas.getTime();

let segundos=date.getSeconds();
let minutos = date.getMinutes();
let horas = date.getHours();
let mes = date.getMonth() + 1;
let diaSemana = date.getDay()+1;

document.querySelector("#mostrarFechas").innerHTML = `Hoy hace ${finMundoMaya} milisegundos que acabó el mundo según los mayas. <br>
La hora actual es ${horas}:${minutos}:${segundos}. Es el día de la semana número ${diaSemana} y el mes número ${mes}.`

//ejercicio 18
document.querySelector("#mostrarMilisegundos1970").innerHTML = `Han pasado ${date.getTime()} desde el 1 de enero de 1970.`
