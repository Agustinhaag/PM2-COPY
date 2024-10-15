const validateData = (req, res, next) => {
  const yearRegex = /^\d{4}$/;
  const { title, year, director, duration, genre, rate, poster } = req.body;
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    res.status(400).json({ error: "Los campos no estan completos" });
  } else if (!yearRegex.test(year)) {
    res.status(400).json({ error: "El año debe ser un número de 4 dígitos" });
  } else {
    next();
  }
};

module.exports = validateData;
