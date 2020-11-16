const placesInput = document.querySelector("#places");
const speciesInput = document.querySelector("#species");
const button = document.querySelector("#btn-generate");
const tableContainer = document.querySelector("#table-container");
const task1 = document.querySelector("#task-1");
const task2 = document.querySelector("#task-2");
const task3 = document.querySelector("#task-3");
const task4 = document.querySelector("#task-4");
const task5 = document.querySelector("#task-5");

let matrix = [];

function renderCell(cell) {
  return `
    <td>${cell}</td>
  `;
}

function renderRow(row) {
  return `
    <tr>
      ${row.map(renderCell).join("\n")}
    </tr>
  `;
}

function renderMatrix(matrix) {
  return `
    <table>
      ${matrix.map(renderRow).join("\n")}
    </table>
  `;
}

function renderTask1Answer(answer) {
  return answer ? "Yes" : "No";
}

function renderTask3Answer(answer) {
  return answer === -1 ? "No" : answer + 1;
}

function checkFirstRowEmpty() {
  const answer = matrix[0].some((item) => item !== 0);
  // ! const data = Array.from(tableContainer.querySelector("tr:first-of-type").cells).map(cell => parseInt(cell.innerHTML));
  // ! const answer = data.some(item => item !== 0);
  // if (answer) {
  //   task1.innerHTML = "Yes";
  // } else {
  //   task1.innerHTML = "No";
  // }
  task1.innerHTML = renderTask1Answer(answer);
}

function countRows10() {
  const answer = matrix.reduce((count, row) => (row.some((cell) => cell > 10) ? count + 1 : count), 0);
  task2.innerHTML = answer;
}

function findEmptyRows() {
  const answer = matrix.findIndex(row => row.every(cell => cell === 0));
  task3.innerHTML = renderTask3Answer(answer);
}

function handleCellClick(event) {
  // Ha nem cellára kattintottam, akkor ne történjen semmi = delegálás
  if (!event.target.matches("td")) {
    return;
  }

  const td = event.target;
  const x = td.cellIndex;
  const y = td.parentNode.rowIndex;

  console.log(x + 1, y + 1);

  // Állapot módosítása !!!
  matrix[y][x] += 1;
  // Felhasználói felület frissítése
  // ! td.innerHTML = parseInt(td.innerHTML) + 1; // Imperatív
  tableContainer.innerHTML = renderMatrix(matrix); // Deklaratív

  checkFirstRowEmpty();
  countRows10();
  findEmptyRows();
}
tableContainer.addEventListener("click", handleCellClick);

function onGenerate(event) {
  const n = placesInput.valueAsNumber;
  const m = speciesInput.valueAsNumber;

  matrix = generateMatrix(n, m);
  console.log(matrix);

  tableContainer.innerHTML = renderMatrix(matrix);
}
button.addEventListener("click", onGenerate);

function generateMatrix(n, m) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}
