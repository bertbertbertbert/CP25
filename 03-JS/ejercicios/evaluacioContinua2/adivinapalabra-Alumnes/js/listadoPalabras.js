const listado = [
  {
    palabra: "javascript",
    pista: "Lenguaje con el que se ha escrito este programa",
  },
  {
    palabra: "android",
    pista: "S.O. que lleva mi teléfono móvil",
  },
  {
    palabra: "manitou",
    pista: "Marca de tabaco que fumo",
  },
  {
    palabra: "kombucha",
    pista: "Té fermentado que esta rico que te mueres",
  },
  {
    palabra: "marihuana",
    pista: "Planta con cogollos que debería estar legalizada",
  },
  {
    palabra: "javascript",
    pista: "Lenguaje con el que se ha escrito este programa",
  },
  {
    palabra: "mechero",
    pista: "Artilugio para encender la cocina",
  },
  {
    palabra: "python",
    pista: "Una lenguaje de programación que tiene como logo una serpiente",
  },
  {
    palabra: "penne",
    pista: "Macarrón alargado",
  },
  {
    palabra: "teclado",
    pista: "Sirve para escribir en un ordenador",
  },
  {
    palabra: "utabon",
    pista: "Desatasca narices",
  },
  {
    palabra: "ventilador",
    pista: "Mueve el aire y da vueltas",
  },
  {
    palabra: "php",
    pista: "Lenguaje de programación del lado del servidor",
  },
  {
    palabra: "silla",
    pista: "Pones tu culo sobre ella",
  },
  {
    palabra: "yestoestodoamigos",
    pista: "Página web de unos amigos",
  },
  {
    palabra: "twitter",
    pista: "Red social con un pájaro",
  },
  {
    palabra: "whatsapp",
    pista: "Envias mensajes instantaneos desde esta APP",
  },
  {
    palabra: "mogadiscio",
    pista: "Capital de Somalia",
  },
  {
    palabra: "electricidad",
    pista: "Su precio está por las nubes",
  }
];


let numRandom = Math.floor(Math.random() * 19);
var palabraAdivinar = listado[numRandom];


var palabra = palabraAdivinar.palabra.toUpperCase();
var pista = palabraAdivinar.pista;

console.log(palabra);
console.log(pista);

var arrayPalabra = palabra.split("");
console.log(arrayPalabra); 


