const validarURL = (url) => {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(url);
};

const converterHtml = (movie) => {
  const { title, year, director, genre, duration, rate, poster, id } = movie;
  const validarImg = validarURL(poster);
  const defaultUrl =
    "https://www.smartphonetechnology.com.ec/static/products/images/default-image.jpg";
  const divContainer = document.createElement("div");
  divContainer.className = "card";

  divContainer.innerHTML = `
    <div class='cont-img'>
 <img src=${validarImg ? poster : defaultUrl} class="card-img-top" alt=${title}>
    <a href='/pages/createMovie.html?id=${id}' class='edit'><i class="fa-solid fa-pen"></i></a>
    </div>
   
    <div class="body-card">
      <h4 class="card-title"><span>Título: </span>${title}</h4>
      <p class="card-text"><span>Duración: </span> ${duration}</p>
      <p class="card-text"><span>Director: </span> ${director}</p>
      <ul><span>Géneros:</span> 
        ${genre
          .map((genero) => {
            return `
         <li>${genero}</li>
         `;
          })
          .join(" ")}
        </ul>
      <p class="card-text"><span>Año de estreno: </span> ${year}</p>
      <p class="card-text"><span>Puntuación: </span> ${rate}</p>
      <div class='cont-btn'>
      <button class='btn btn-outline-info' id=${id} data-bs-toggle="modal" data-bs-target="#exampleModal-${id}">Más</button>
     <button class='btn btn-outline-danger' id=${id}>Borrar</button> 
      </div>
  
    </div>
   
   `;
  return divContainer;
};

module.exports = { converterHtml, validarURL };
