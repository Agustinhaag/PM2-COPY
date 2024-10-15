const mongoose = require("mongoose");

const dbMovies = async () => {
  const passwordDb = process.env.PASSWORDDB;
  const userDb = process.env.USERDB;
  const db = process.env.DB;
  try {
    await mongoose.connect(
      `mongodb+srv://${userDb}:${passwordDb}@cluster0.an453rx.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbMovies;
