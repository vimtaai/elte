// https://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/01

// 7. Adott két szám. Írj függvényt, amely visszaadja legnagyobb közös osztójukat!
/**
  Függvény lnko(a, b: Egész): Egész 
    Ha a < b akkor csere(a, b)
    maradek = a mod b
    Ciklus amíg maradek > 0
        a := b
        b := maradek
        maradek := a mod b
    Ciklus vége
    lnko := b
  Függvény vége
 */

/**
 * Calculates the greatest common divisor of two numbers
 * @param {number} numberA The first number
 * @param {number} numberB The second number
 * @returns number The greatest common divisor
 */
function greatestCommonDivisor(numberA, numberB) {
  let largerNumber = numberA < numberB ? numberB : numberA;
  let smallerNumber = Math.min(numberA, numberB);
  let remainder = largerNumber % smallerNumber;
  while (remainder > 0) {
    largerNumber = smallerNumber;
    smallerNumber = remainder;
    remainder = largerNumber % smallerNumber;
  }
  return smallerNumber;
}

let divisor = greatestCommonDivisor(42, 12);
console.log(divisor);

// 16. Döntsd el egy mátrxiról, hogy minden eleme páros-e!
let matrix = [
  [2, 4, 6],
  [4, 6, 8],
  [6, 8, 0],
];

function isEveryValueEvenInMatrix(matrix) {
  for (let row of matrix) {
    for (let item of row) {
      if (item % 2 !== 0) {
        return false;
      }
    }
  }
  return true;
}

function isEveryValueEvenInMatrix(matrix) {
  const isEven = (item) => item % 2 === 0;
  return matrix.every((row) => row.every(isEven));
}

console.log(isEveryValueEvenInMatrix(matrix));