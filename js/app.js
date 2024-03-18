const buttonInico = document.getElementById('inicio');
const buttonPausa = document.getElementById('pausa');
const buttonResetiar = document.getElementById('reset');
const tiempoId = document.getElementById('tiempo');

let intervalId;
let tiempo = 0;
let pausa = true;

function tiempoActual() {
  const horas = Math.floor(tiempo / 3600);
  const minutos = Math.floor((tiempo % 3600) / 60);
  const segundos = tiempo % 60;

  tiempoId.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

buttonInico.addEventListener('click', () => {
  if (pausa) {
    pausa = false;
    if (!intervalId) {
      intervalId = setInterval(() => {
        tiempo++;
        tiempoActual();
      }, 1000);
    }
  }
});

buttonPausa.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  pausa = true;
});

buttonResetiar.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  tiempo = 0;
  pausa = true;
  tiempoActual();
});