export const btn5 = document.querySelector('#btn5');

// id foto title nombre apellido description 

mostra = document.querySelector('#mostra');


export const miHTML = (datos) => {
  mostra.innerHTML = "";
  let html = `<h4> Usuarios </h4>`;
  datos.forEach((dato) => {
    const { id, picture, name, location } = dato;
    /* const { title, first, last } = name;
    const { thumbnail } = picture;
    const { timezone } = location;
    const { description } = timezone; */
    html += `<div class="persona"> <img src="${picture.thumbnail}" width="200"/> <p> ID: ${id.value} </br></p> <p>Titulo: ${name.title}. Nombre: ${name.first} Apellido: ${name.last}</p> <p>Direccion: ${location.timezone.description} </div></br></br>`;

  });
  mostra.innerHTML = html;
}

export const obtDatosUsers = () => {
  fetch('https://randomuser.me/api/?results=50')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error de la solicitud');
      }
      return response.json();
    })
    .then((response) => {
      miHTML(response.results);
    })
    .catch((error) => {
      console.log(error);
      mostra.innerHTML = "Error";
    });
};

btn5.addEventListener('click', obtDatosUsers);