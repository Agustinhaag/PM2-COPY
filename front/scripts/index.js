const navbar = require("./navbar");
const footer = require("./footer");
const navResponsive = require("./navResponsive");
const carrusel = require("./carrusel");
const sendForm = require("./movies");
const returnMovies = require("./returnMovies");
const axios = require("axios");
const { createForm, resetForm } = require("./formMovies");
const cargarDatos = require("./loadData");

navbar();
footer();
navResponsive();
carrusel();
sendForm();
createForm();
resetForm();

const allMovies = async () => {
  const spinner = document.querySelector(".cont-spinner");
  try {
    const movies = await axios.get("http://localhost:3000/movies");
    if (!movies.data) {
      spinner.style.display = "flex";
    } else {
      spinner.style.display = "none";
      returnMovies(movies.data);
    }
  } catch (error) {
    console.log(error);
  }
};

allMovies();

const title = document.querySelector("#titleForm");
const btn = document.querySelector("#btn-create");
const img = document.querySelector("#img");
const url = window.location.href;
const params = new URLSearchParams(url.split("?")[1]);

if (params.has("id") === false) {
  img.remove();
  return;
} else {
  window.onload = () => {
    title.textContent = "Editar película";
    btn.textContent = "Editar";
    cargarDatos();
  };
}
