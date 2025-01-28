let mostrar = document.querySelector("#mostrar");
do {  //pedimos titulo y si va a llevar barras 
  let dosCampos = prompt(
    "Introduce un título que contenga entre 3 y 20 caracteres y una barra que sea 'yes' o 'no'. Ambos campos separados por comas"
  );
  var dosCamposArray = dosCampos.split(",").map((campo) => campo.trim());
  var titulo = dosCamposArray[0];
  var barra = dosCamposArray[1].toLowerCase();
  if (titulo.length < 3 || titulo.length > 20) {
    alert("El título debe tener entre 3 y 20 caracteres.");
  } else if (barra !== "yes" && barra !== "no") {
    alert("La barra debe ser 'yes' o 'no'.");
  } else {
    break;
  }
} while (true);

//pedimos números random para altura y anchura de la nueva ventana
let alturaAleatoria = Math.floor(Math.random() * (400 - 50 + 1)) + 50;
let anchoAleatorio = Math.floor(Math.random() * (400 - 50 + 1)) + 50;
let tieneBarra; //creamos variable para almancenar true o false del prompt anterior
if (barra === "yes") {
  tieneBarra = yes;
} else {
  tieneBarra = no;
}
let atributosVentana = `width=${anchoAleatorio}, height=${alturaAleatoria}, scrollbars=${tieneBarra}`;//creamos varaible con atributos de la nueva ventana
let nuevaVentana = window.open("finestra.html", titulo, atributosVentana); // abrimos la nueva ventana

/* const valorMaxim = Number.MAX_VALUE;
const valorMinim = Number.MIN_VALUE;
const alturaPantalla = screen.height;
const ampladaPantalla = screen.width;
const alturaWeb = document.body.scrollHeight;
const ampladaWeb = document.body.scrollWidth;
const url = location.href;
const nomAmbIndex = location.pathname;
const nombSenseIndex = location.hostname;
const numRandom = Math.floor(Math.random() * 201);
const sOperativo = navigator.platform;
const tabla = `
  <table>
    <tr> 
      <td style="background-color:orange" >PROPIETAT</td> 
      <td style="background-color:green" >VALOR OBTINGUT AMB JS</td> 
    </tr>
    <tr> 
      <td>Valor màxim que pot tenir un número en JavaScript</td> 
      <td>${valorMaxim}</td> 
    </tr>
    <tr> 
      <td>Valor mínim que pot tenir un número en JavaScript</td> 
      <td>${valorMinim}</td> 
    </tr>
     <tr> 
      <td>Alçada total de la pantalla</td> 
      <td>${alturaPantalla} pixels</td> 
    </tr>
    <tr> 
      <td>Amplada total de la pantalla</td> 
      <td>${ampladaPantalla} pixels</td> 
    </tr>
    <tr> 
      <td>Alçada de la pàgina web</td> 
      <td>${alturaWeb}</td> 
    </tr>
    <tr> 
      <td>Amplada de la pàgina web</td> 
      <td>${ampladaWeb}</td> 
    </tr>
    <tr> 
      <td>URL de la pàgina web</td> 
      <td>${url}</td> 
    </tr>
    <tr> 
      <td>Nom de la pàgina web amb la seva extensió (index.html)</td> 
      <td>${nomAmbIndex}</td> 
    </tr>
    <tr> 
      <td>Nom de la pàgina web sense la seva extensió (index)</td> 
      <td>${nombSenseIndex}</td> 
    </tr>
    <tr> 
      <td>Un valor aleatori entre 0 i 200 (utilitza Math)</td> 
      <td>${numRandom}</td> 
    </tr>
    <tr> 
      <td>Sistema operatiu de lordinador.</td> 
      <td>${sOperativo}</td> 
    </tr>
   
  </table>`;

mostrar.innerHTML = tabla;  */

