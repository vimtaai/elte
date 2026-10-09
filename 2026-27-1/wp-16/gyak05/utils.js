export function generateNewCoordinates(currentX, currentY) {
  let x, y;

  do {
    const newCoordinates = getRandomCoordinates();
    x = newCoordinates.x;
    y = newCoordinates.y;
  } while (x === currentX && y === currentY);

  return { x, y };
}

function getRandomCoordinates() {
  const x = Math.floor(Math.random() * 5);
  const y = Math.floor(Math.random() * 5);

  return { x, y };
}
