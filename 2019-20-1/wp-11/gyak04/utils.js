export function randomBetween(a, b) {
  // Math.random() // ! [0, 1)
  return Math.floor(Math.random() * (b - a + 1)) + a;
}