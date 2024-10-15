const footer = () => {
    const footer = document.querySelector("#footer");
    footer.innerHTML = `
    <section> 
    <img src='../assets/img/logo-henry.jpg' alt=''>
      <div class='cont-footer'>
          <nav >
            <h4>MENÚ</h4>
            <a href="/">Inicio</a>
            <a href="/pages/about.html">Nosotros</a>
        <a href="/pages/movies.html">Recomendadas</a>
          </nav>
          <div class="redes">
            <h4>CONTACTOS</h4>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
        </section>
        <p>&copy;All rights reserved 2024 - Henry-Cinema;</p>
      `;
    return footer;
  };
  module.exports = footer
   