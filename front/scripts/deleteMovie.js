const axios = require("axios");

const deleteMovie = (card) => {
  const btn = card.querySelector(".btn-outline-danger");
  if (btn) {
    btn.addEventListener("click", async () => {
      const confirmation = await Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas eliminar la película?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (confirmation.isConfirmed) {
        await axios.delete(`http://localhost:3000/movies/${btn.id}`);
        Swal.fire({
          title: "¡Eliminado!",
          text: "La película se ha eliminado correctamente.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        card.remove();
      }
    });
  }
};

module.exports = deleteMovie;
