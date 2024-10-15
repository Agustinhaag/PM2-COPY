const dbMovies = require("./src/config/db");
const app = require("./src/server");

dbMovies().then((res) => {
  const port = process.env.PORT
  app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
  });
});
