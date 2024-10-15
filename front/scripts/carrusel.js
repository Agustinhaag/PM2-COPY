const carrusel = () => {
  let fila = document.querySelector(".contenedor-carrusel");
  let flechaDerecha = document.getElementById("flecha-derecha");
  let flechaIzquierda = document.getElementById("flecha-izquierda");
  if(fila && flechaDerecha && flechaIzquierda){
     flechaDerecha.addEventListener("click", () => {
    fila.scrollLeft += fila.offsetWidth;
  });

  flechaIzquierda.addEventListener("click", () => {
    fila.scrollLeft -= fila.offsetWidth;
  });
  }
 
};

module.exports = carrusel;
