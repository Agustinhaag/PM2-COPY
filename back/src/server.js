require('dotenv').config();
const express = require("express");
const app = express();
const routeMovie = require("../src/routes/moviesRoute");
const morgan = require("morgan");
const cors = require("cors");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/movies", routeMovie);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = app;
