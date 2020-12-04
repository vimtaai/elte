// 1. lépés: állapot (változók)

// 1/1. lépés: típusok
class Button {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let stage;          // "Jelenet" - kattintás vagy lejátszás
let litUpButton;    // Melyik lámpa világít éppen
let lights;         // Fények
let buttons;        // Gombok
let buttonsToPress; // Melyik gombokat kell lenyomni
let pressedButtons; // Melyik gombokat nyomtam már le

// 2. lépés: állapot megjelenítése (render függvények)
function renderBoard(board, progress) {
  return `
    <caption>${renderProgress(progress)}</caption>
    ${board.map(row => `<tr>${row.map(renderButton).join("\n")}</tr>`).join("\n")}
  `;
}

function renderProgress(progress) {
  let html = ``;
  for (let i = 1; i <= 5; i++) {
    html += `<span class="progress${i <= progress.length ? ` done` : ``}"></span>`;
  }
  return html;
}

function renderButton(button) {
  // let [x, y] = buttonsToPress[buttonsToPress.length - 1];
  // let x = buttonsToPress[buttonsToPress.length - 1][0];
  // let x = buttonsToPress[buttonsToPress.length - 1][1];
  let x = -1, y = -1;
  if (litUpButton !== -1) {
    let [lx, ly] = buttonsToPress[litUpButton];
    x = lx;
    y = ly;
  }

  return `
    <td${x === button.x && y === button.y ? ` class="active"` : ``}>
      ${button.x};${button.y}
    </td>
  `;
}

// 3. kezdőállapot/állapotátmenetek
function initBoard() {
  let result = [];
  for (let y = 0; y < 3; y++) {
    let row = [];
    for (let x = 0; x < 3; x++) {
      row.push(new Button(x, y));
    }
    result.push(row);
  }
  return result;
}

function randomXY() {
  let x = Math.floor(Math.random() * 3);
  let y = Math.floor(Math.random() * 3);

  return [x, y];
}

// 4. indítás
const lightsTable = document.querySelector("#lights");
const buttonsTable = document.querySelector("#buttons");

function init() {
  stage = "replay";
  lights = initBoard();
  buttons = initBoard();
  buttonsToPress = [];
  pressedButtons = [];
  
  buttonsToPress.push(randomXY());
  litUpButton = 0;
  replay();
  lightsTable.innerHTML = renderBoard(lights, buttonsToPress);
  buttonsTable.innerHTML = renderBoard(buttons, pressedButtons);
}

init();
console.log(lights, buttons, buttonsToPress);

// 5. eseménykezelés
// Visszajátszás - miket kell megnyomni
function nextLight() {
  litUpButton += 1;

  // Ha kifogytam a lámpákból
  if (litUpButton >= buttonsToPress.length) {
    litUpButton = -1;
    stage = "click";
  } else {
    replay();
  }

  lightsTable.innerHTML = renderBoard(lights, buttonsToPress);
  buttonsTable.innerHTML = renderBoard(buttons, pressedButtons);
}

function replay() {
  setTimeout(nextLight, 500);
}

// Kattintás esemény
function handleButtonClick(event) {
  // Delegálás
  if (!event.target.matches("td")) {
    return;
  }

  // Letiltom a kattintást ha replay állapotban vagyok
  if (stage === "replay") {
    return;
  }

  let td = event.target;
  // Koordináták
  let [clickedX, clickedY] = td.innerText.split(";");
  // Soron következő lámpa
  let [nextX, nextY] = buttonsToPress[pressedButtons.length];

  if (nextX === parseInt(clickedX) && nextY === parseInt(clickedY)) {
    // Új fény generálása (állapotváltozás)
    pressedButtons.push([clickedX, clickedY]);

    if (pressedButtons.length === buttonsToPress.length) {
      if (pressedButtons.length === 5) {
        console.log("NYERTÉL!");
      } else {
        buttonsToPress.push(randomXY());
        pressedButtons = [];
        stage = "replay";
        replay();
      }
    }
  } else {
    // Kezdődik előről
    init();
  }
  
  // Újrarajzolás
  lightsTable.innerHTML = renderBoard(lights, buttonsToPress);
  buttonsTable.innerHTML = renderBoard(buttons, pressedButtons);
}
buttonsTable.addEventListener("click", handleButtonClick);