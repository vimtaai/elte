const scoreElement = document.querySelector("#score");
const boardElement = document.querySelector("#board");

let currentScore = 0;
let moleCoordinates = { x: 2, y: 2 };

function onCellClick(event) {
  if (event.target.closest(".mole")) {
    onMoleClick(event);
  } else if (event.target.closest("td:not(.mole)")) {
    onEmptyCellClick();
  }
}

function onMoleClick(event) {
  console.log("mole");
  const moleCellElement = event.target.closest(".mole");

  currentScore += 1;
  let x, y;
  do {
    const newCoordinates = getRandomCoordinates();
    x = newCoordinates.x;
    y = newCoordinates.y;
  } while (x === moleCoordinates.x && y === moleCoordinates.y);

  moleCoordinates.x = x;
  moleCoordinates.y = y;

  scoreElement.textContent = currentScore;
  moleCellElement.classList.remove("mole");
  boardElement.rows[y].cells[x].classList.add("mole");
}

function onEmptyCellClick(event) {
  if (currentScore > 0) {
    currentScore -= 1;
  }

  scoreElement.textContent = currentScore;
}

boardElement.addEventListener("click", onCellClick);

function getRandomCoordinates() {
  const x = Math.floor(Math.random() * 5);
  const y = Math.floor(Math.random() * 5);
  return { x, y };
}
