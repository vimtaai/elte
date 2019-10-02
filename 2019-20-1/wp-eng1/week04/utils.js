export function randomCoords(width, height) {
  // ! [a, b]
  // ! Math.floor(Math.random() * (b - a + 1) + a
  // ! [0, width-1]
  const x = Math.floor(Math.random() * width); 
  // ! [0, height-1]
  const y = Math.floor(Math.random() * height);
  // return { x: x, y: y }
  return { x, y };
}