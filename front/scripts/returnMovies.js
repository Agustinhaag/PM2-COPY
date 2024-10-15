const { converterHtml } = require("./converterCard");
const deleteMovie = require("./deleteMovie");
const returnModal = require("./modal");

const contCard = document.querySelector("#cont-card");

const returnMovies = (films) => {
  const movies = films.map((movie) => {
    return converterHtml(movie);
  });

  movies.forEach((item) => {
    contCard.appendChild(item);
    if(document.title === 'Proyecto M2'){
      deleteMovie(item);
      returnModal(item);
    }
  });
  
};

module.exports = returnMovies;
