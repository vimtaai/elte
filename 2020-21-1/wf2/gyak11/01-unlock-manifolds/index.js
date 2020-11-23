// 1. lépés: állapot (változók)

/**
 * Mátrix (2×5): A gombokon szereplő számok mátrixa
 */
let buttons;
let nextButton;

// 2. lépés: állapot megjelenítése (render függvények)
function renderButtons(buttons) {
  if (nextButton <= 10) {
    return buttons.map(row => `<tr>${row.map(renderButton).join("\n")}</tr>`).join("\n");
  } else {
    return `<caption><h1>Task successful</h1></caption>`;
  }
}

function renderButton(number) {
  // if (number < nextButton) {
  //   return `<td class="ok">${number}</td>`;
  // } else {
  //   return `<td>${number}</td>`;
  // }
  return `<td${number < nextButton ? ` class="ok"` : ``}>${number}</td>`;
} 

// 3. kezdőállapot
// Feladat: 2×5-ös mátrix előállítása, amiben össze vannak keverve a számok 1-10-ig
function shuffle() {
  // Feltöltöm a tömböt 1-10-ig a számokkal
  const numbers = [];

  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  // Keverés
  const shuffled = [];
  for (let i = 0; i < numbers.length; i++) {
    // Kiválasztok egy véletlenszerű elemet
    let x;
    do {
      x = Math.floor(Math.random() * numbers.length);
    } while(shuffled.includes(numbers[x]));

    shuffled.push(numbers[x]);
  }

  //    [2, 4, 6, 5, 3, 1, 7, 9, 10, 8]
  // => [[2, 4, 6, 5, 3], [1, 7, 9, 10, 8]]
  return [shuffled.slice(0, 5), shuffled.slice(5)];
}

// 4. Indítás
const table = document.querySelector("table");

function init() {
  buttons = shuffle();
  nextButton = 1;
  table.innerHTML = renderButtons(buttons);
}

init();

// 5. Eseménykezelés
function handleButtonClick(event) {
  // Delegálás
  if (!event.target.matches("td")) {
    return;
  }

  let td = event.target;
  let number = parseInt(td.innerText);

  if (number === nextButton) {
    // OK (következő gomb)
    nextButton += 1;
    table.innerHTML = renderButtons(buttons);
  } else {
    // :( (új játék)
    init();
  }
}
table.addEventListener("click", handleButtonClick);

function handleH1Click(event) {
  if (!event.target.matches("h1")) {
    return;
  }

  init();
}
table.addEventListener("click", handleH1Click);