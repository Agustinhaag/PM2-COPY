const { Router } = require("express");
const { getMovies, movieCreate, movieDelete, getOneMovie, movieUpdate } = require("../controllers/moviesController");
const validateData = require("../middleware/validationData");
const validateId = require("../middleware/validateId");
const route = Router();

route.get("/", getMovies);
route.get("/:id", validateId, getOneMovie)
route.post("/", validateData, movieCreate);
route.put("/edit/:id", validateId, movieUpdate)
route.delete('/:id',validateId, movieDelete)

module.exports = route;
