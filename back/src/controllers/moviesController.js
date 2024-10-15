const {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../services/moviesService");
const catchAsync = require("../utils/catch");

const getMovies = async (req, res) => {
  const movies = await getAllMovies();
  res.status(200).json(movies);
};

const getOneMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await getMovie(id);
  res.status(200).json(movie);
};

const movieCreate = async (req, res) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  const newMovie = await createMovie({
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  });
  res.status(201).json({ message: "Película creada con éxito" });
};

const movieUpdate = async (req, res) => {
  const { id } = req.params;
  const { title, year, director, duration, genre, rate, poster } = req.body;
  const movie = await updateMovie(id, {
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  });
  res.status(201).json({ message: "Película editada con éxito", movie });
};

const movieDelete = async (req, res) => {
  const { id } = req.params;

  const movie = await deleteMovie(id);
  res.status(204).json({ message: "Película eliminada correctamente" });
};

module.exports = {
  getMovies: catchAsync(getMovies),
  movieCreate: catchAsync(movieCreate),
  movieDelete: catchAsync(movieDelete),
  getOneMovie: catchAsync(getOneMovie),
  movieUpdate: catchAsync(movieUpdate),
};
