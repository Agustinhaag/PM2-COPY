const axios = require("axios");

const sendPost = async (
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster
) => {
  const newMovie = await axios.post("http://localhost:3000/movies", {
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  });
};

const sendPut = async (id, title, year, director, duration, genre, rate, poster) => {
  const newMovie = await axios.put(`http://localhost:3000/movies/edit/${id}`, {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
};

module.exports = {
  sendPost,
  sendPut,
};
