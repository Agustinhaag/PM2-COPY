const navbar = () => {
  const header = document.querySelector("#cont-header");
  header.innerHTML = `
      <img src="../assets/img/logo-henry.jpg" alt="" />
      <div>
      <nav id='menu'>
        <a href="/">Inicio</a>
        <a href="/pages/about.html">Nosotros</a>
        <a href="/pages/movies.html">Recomendadas</a>
        <a href="/pages/createMovie.html">Crear películas</a>
        <span id="cerrar" class="close"> 
        <i class="fa-solid fa-x"></i>
      </span>
      </nav>
      <span id="mostrar" class="hamb">
      <i class="fa-solid fa-bars"></i>
    </span>
    </div>
      `;
  return header;
};

module.exports = navbar;
