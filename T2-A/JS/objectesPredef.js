let mostrar = document.querySelector("#mostrar");

do {  
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
let alturaAleatoria = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
let anchoAleatorio = Math.floor(Math.random() * (500 - 50 + 1)) + 50;

let tieneBarra = barra === "yes" ? 'yes' : 'no';
let nuevaVentana = window.open("finestra.html","", `width=${anchoAleatorio}, height=${alturaAleatoria}, scrollbars=${tieneBarra}`);
nuevaVentana.document.write(`
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${titulo}</title>
    </head>
    <body>
      <div id="mostrarHora"></div>
      <script src="JS/finestra.js"></script>
    </body>
  </html>
`);
