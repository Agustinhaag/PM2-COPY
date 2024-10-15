const axios = require("axios");
const { validarURL } = require("./converterCard");

const cargarDatos = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const cardId = urlParams.get("id");
  const defaultUrl =
  "https://www.smartphonetechnology.com.ec/static/products/images/default-image.jpg";

  if (cardId) {
    const movie = await axios.get(`http://localhost:3000/movies/${cardId}`);

    const title = document.getElementById("title");
    const year = document.getElementById("year");
    const genre = document.getElementById("genre");
    const poster = document.getElementById("poster");
    const director = document.getElementById("director");
    const duration = document.getElementById("duration");
    const rate = document.getElementById("rate");
    const img = document.getElementById('img')
    const validateImg = validarURL(movie.data.poster)

    title.value = movie.data.title;
    year.value = movie.data.year;
    genre.value = movie.data.genre;
    poster.value = movie.data.poster;
    director.value = movie.data.director;
    duration.value = movie.data.duration;
    rate.value = movie.data.rate;
    img.src = validateImg ? movie.data.poster : defaultUrl
    img.alt = movie.data.title
  }
};

module.exports = cargarDatos;
