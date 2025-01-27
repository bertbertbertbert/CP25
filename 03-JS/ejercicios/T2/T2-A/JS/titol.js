do {
  var titol = prompt("Inserta un título");
} while (titol === "" || titol === null);

titol = titol.toUpperCase();
let docTitle = (document.body.title = titol);
mostrar.innerHTML = docTitle;
