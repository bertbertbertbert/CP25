do {
  var titol = prompt("Inserta un título");
} while (titol === "" || titol === null);

titol = titol.toUpperCase();
let docTitle = (document.title = titol);
mostrar.innerHTML = docTitle;
