const days = document.querySelector("[data-dias]");
const hours = document.querySelector("[data-horas]");
const minutes = document.querySelector("[data-minutos]");
const seconds = document.querySelector("[data-segundos]");

const lancamento = "1 Apr 2022";

function countdown() {
  const data = new Date();
  const lancamentoDate = new Date(lancamento);

  const totalSegundos = (lancamentoDate - new Date()) / 1000;

  const dias = Math.floor(totalSegundos / 3600 / 24);
  const horas = Math.floor(totalSegundos / 3600) % 24;
  const minutos = Math.floor(totalSegundos / 60) % 60;
  const segundos = Math.floor(totalSegundos) % 60;

  days.innerText = dias;
  hours.innerText = horas;
  minutes.innerText = minutos;
  seconds.innerText = segundos;
}

setInterval(countdown, 1000);
