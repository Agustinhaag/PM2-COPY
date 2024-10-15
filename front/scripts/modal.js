const returnModal = (item) => {
  const btn = item.querySelector(".btn-outline-info");
  const title = item.querySelector('.card-title')
  const titleText = title.textContent;

  // Extraemos solo el título sin la palabra "Título"
  const titulo = titleText.split(":")[1].trim();
  const modalHtml = `
    <div class="modal fade" id="exampleModal-${btn.id}" tabindex="-1" aria-labelledby="exampleModalLabel-${btn.id}" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel-${btn.id}">${titulo}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class='card'>
          ${item.innerHTML}
          
          </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const divContainer = document.createElement("div");
  divContainer.innerHTML = modalHtml.trim();
  const modal = divContainer.querySelector(".modal");

  const contBtn = divContainer.querySelector(".cont-btn");
  if (contBtn) {
    contBtn.style.display = "none";
  }

  document.body.appendChild(divContainer);
  const bsModal = new bootstrap.Modal(modal);
  
  btn.addEventListener("click", () => {
    bsModal.show();
  });
  modal.addEventListener("hidden.bs.modal", function () {
    divContainer.remove();
  });
};

module.exports = returnModal;
