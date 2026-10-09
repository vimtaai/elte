let timer = null;

export function startTimer(handler) {
  if (timer !== null) {
    clearInterval(timer);
  }

  timer = setInterval(handler, 5000);
}
