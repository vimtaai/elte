export function randomIntBetween(min, max) {
  const minInt = parseInt(min);
  const maxInt = parseInt(max);

  return Math.trunc(Math.random() * (maxInt - minInt + 1)) + minInt;
}

export function randomCoords(width, height) {
  const x = randomIntBetween(0, width - 1);
  const y = randomIntBetween(0, height - 1);

  return { x, y };
}