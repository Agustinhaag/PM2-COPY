const { sendPost, sendPut } = require("./methods");

const form = document.querySelector("#formCreate");

const validate = async () => {
  const title = document.querySelector("#title").value;
  const year = document.querySelector("#year").value;
  const director = document.querySelector("#director").value;
  const duration = document.querySelector("#duration").value;
  const genre = document.querySelector("#genre").value;
  const rate = document.querySelector("#rate").value;
  const poster = document.querySelector("#poster").value;

  if (
    !title.trim() ||
    !year.trim() ||
    !director.trim() ||
    !duration.trim() ||
    !genre.trim() ||
    !rate.trim() ||
    !poster.trim()
  ) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    const yearNumber = parseInt(year);
    const rateNumber = parseInt(rate);

    const urlParams = new URLSearchParams(window.location.search);
    const cardId = urlParams.get("id");

    if (!cardId) {
      sendPost(
        title,
        yearNumber,
        director,
        duration,
        genre,
        rateNumber,
        poster
      );
    } else {
      sendPut(
        cardId,
        title,
        yearNumber,
        director,
        duration,
        genre,
        rateNumber,
        poster
      );
    }
    window.location.href = "/";
  }
};

const createForm = () => {
  const btn = document.querySelector("#btn-create");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      validate();
      form.reset();
    });
  }
};

const resetForm = () => {
  const btnReset = document.querySelector("#btn-reset");
  if (btnReset) {
    btnReset.addEventListener("click", (e) => {
      e.preventDefault();
      form.reset();
      form.classList.remove("error");
    });
  }
};

module.exports = {
  createForm,
  resetForm,
};
