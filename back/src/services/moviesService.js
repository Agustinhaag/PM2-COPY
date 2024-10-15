const Movie = require("../models/Movie");
class Movies {
  constructor(title, year, director, duration, genre, rate, poster, _id) {
    if (!title || !poster || !director) {
      throw new Error(
        "El título, el director y todas las propiedades son requeridas."
      );
    }
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
    this.id = _id;
  }
}

const getAllMovies = async () => {
  const moviesData = await Movie.find();
  const movies = moviesData.map((movie) => {
    return new Movies(
      movie.title,
      movie.year,
      movie.director,
      movie.duration,
      movie.genre,
      movie.rate,
      movie.poster,
      movie._id
    );
  });
  return movies;
};
const getMovie = async (id) => {
  const movie = await Movie.findById(id);
  return movie;
};

const createMovie = async (movie) => {
  const newMovie = await Movie.create(movie);
  return newMovie;
};

const updateMovie = async (id, data) => {
  const movie = await Movie.findByIdAndUpdate(id, data);
console.log(data)
  return movie;
};

const deleteMovie = async (id) => {
  const movie = await Movie.findByIdAndDelete(id);
  return movie;
};
module.exports = {
  getAllMovies,
  getMovie,
  createMovie,
  deleteMovie,
  updateMovie,
};
