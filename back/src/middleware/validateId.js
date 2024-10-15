const mongoose = require("mongoose");

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    next();
  } else {
    next({ message: "Id inválido", statusCode: 400 });
  }
};

module.exports = validateId;
