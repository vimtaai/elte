// https://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/01

// 15. Írj függvényt, amely megadja egy egész szám prímtényezős felbontását!
function getPrimeFactors(number) {
    let factors = [];
    let possibleFactor = 2;
    let currentNumber = Number(number);
    while (possibleFactor <= currentNumber) {
        if (currentNumber % possibleFactor === 0) {
            factors.push(possibleFactor);
            currentNumber /= possibleFactor;
        } else {
            possibleFactor += 1;
        }
    }
    return factors;
}

console.log(getPrimeFactors(36));

let inputData = "42";
console.log(getPrimeFactors(inputData));

// JavaScript bejárós ciklusok
const numbers = [1, 3, 4];
for (const number of numbers) { }

const person = {
    name: "John",
    age: 42,
    hairColor: "brown"
};

for (const key in person) {
    console.log(key);
}

for (const key of Object.keys(person)) {
    console.log(key);
}

// 18. Válogasd ki egy mátrixból a negatív számokat!
const matrix = [
    [1, -2, 5], [7, "apple", true],
    ["🐈", 42, -47]
];

const negativeValues = [];
for (const row of matrix) {
    for (const value of row) {
        if (value < 0) {
            negativeValues.push(value);
        }
    }
}
console.log(negativeValues);

const isNegative = (number) => number < 0;
console.log(matrix.flat().filter(isNegative));
