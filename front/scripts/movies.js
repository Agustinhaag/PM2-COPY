const form = document.querySelector("#form");

const validate = () => {
  const title = document.querySelector("#title").value;
  const message = document.querySelector("#message").value;

  if (!title.trim() || !message.trim()) {
    form.classList.add("error");
  }else{
    form.classList.remove('error')
  }


};

const sendForm = () => {
  const btn = document.querySelector("#btn");

  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      validate();
    });
  }
};


module.exports = sendForm

