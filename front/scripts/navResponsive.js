const mainResponsive = () => {
  const header = document.querySelector("#header");
  const menu = document.getElementById("menu");
  const mostrar = document.getElementById("mostrar");
  const cerrar = document.getElementById("cerrar");

  mostrar.addEventListener("click", () => {
    menu.classList.add("visible");
    menu.style.transition = "0.6s";
    header.style.position = "absolute";
    mostrar.style.visibility = "hidden";
  });
  cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");

    mostrar.style.visibility = "visible";
  });
};

module.exports = mainResponsive;
