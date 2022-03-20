export default function initModal() {
  const inscreverSe = document.querySelector(".inscrever a");
  const modalContainer = document.querySelector("[data-modal='container']");
  const modal = document.querySelector("[data-modal='container']");
  const fechar = document.querySelector(".fechar");

  function abrirModal() {
    modalContainer.classList.add("ativo");
  }

  function fecharModal() {
    modalContainer.classList.remove("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === modalContainer) {
      fecharModal();
    }
  }

  inscreverSe.addEventListener("click", abrirModal);
  fechar.addEventListener("click", fecharModal);
  modalContainer.addEventListener("click", cliqueForaModal);
}
