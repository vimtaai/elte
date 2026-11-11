const solution = [
  [".", ".", "F", "."],
  [".", ".", "S", "."],
  ["S", "F", ".", "F"],
  [".", ".", ".", "S"],
];

const puzzle1 = [
  [".", ".", "F", " "],
  [" ", " ", "S", "."],
  ["S", "F", ".", "F"],
  [".", ".", ".", "S"],
];

// Ide írd a megoldásodat!
const task1 = solution[0].includes("F");
const task2 = solution[2].filter((symbol) => symbol === "S").length;
const task3 = solution.map((row) => row.map((symbol) => symbol === "F" ? "F" : " "));

const task3b = [];
for (const row of solution) {
  const newRow = [];
  for (const symbol of row) {
    newRow.push(symbol === "F" ? "F" : " ")
  }
  task3b.push(newRow);
}

const task4 = puzzle1.every((row) => row.every((symbol) => symbol !== " "));

console.log(task1);
console.log(task2);
console.log(task3, task3b);
console.log(task4);
