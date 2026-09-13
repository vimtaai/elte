// https://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/01

// 12. Számold meg, hány páros szám van egy számokat tartalmazó tömbben!
const numbers = [2, 4, 6, 14, 13, 47];

// Imperative
let count = 0;
for (const number of numbers) {
  if (number % 2 === 0) {
    count += 1;
  }
}
console.log(count);

// Functional
const isEven = (number) => number % 2 === 0;
numbers.filter(isEven).length;

// 16. Döntsd el egy mátrxiról, hogy minden eleme páros-e!
const matrix = [
  [2, 4, 6],
  [4, 6, 8],
  [1, 2, 3]
];

// Imperative
function isEveryValueEvenInMatrix() {
  for (const row of matrix) {
    for (const number of row) {
      if (!isEven(number)) {
        return false;
      }
    }
  }
  return true;
}

// Functional
matrix.every((row) => row.every((number) => isEven(number)));
matrix.flat().every((number) => isEven(number));