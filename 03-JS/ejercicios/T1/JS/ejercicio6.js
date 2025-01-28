let respuestaSemana = prompt("Elige un día de la semana");
respuestaSemana = respuestaSemana.toUpperCase();
let result;
switch (respuestaSemana) {
  case "LUNES":
    result = "el día de la semana que elegiste es lunes";
    break;

  case "MARTES":
    result = "el día de la semana que elegiste es martes";
    break;

  case "MIERCOLES":
    result = "el día de la semana que elegiste es miercoles";
    break;

  case "JUEVES":
    result = "el día de la semana que elegiste es jueves";
    break;

  case "VIERNES":
    result = "el día de la semana que elegiste es viernes";
    break;

  case "SABADO":
    result = "el día de la semana que elegiste es sábado";
    break;

  case "DOMINGO":
    result = "el día de la semana que elegiste es domingo";
    break;

  default:
    alert("elección incorrecta");
    location.reload();
}

mostrar.innerHTML = result;
salirONo();
