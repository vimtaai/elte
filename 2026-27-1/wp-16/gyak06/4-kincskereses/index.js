function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function xyCoord(td) {
  return {
    x: td.cellIndex,
    y: td.parentNode.rowIndex,
  };
}

function distanceHue(x1, y1, x2, y2) {
  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  const maxDistance = Math.sqrt((10 - 1) ** 2 + (14 - 1) ** 2);
  console.log(distance / maxDistance);
  const hue = (120 * distance) / maxDistance;
  return hue;
}

function coordsEqual(coordA, coordB) {
  return coordA.x === coordB.x && coordA.y === coordB.y;
}

const containerDiv = document.querySelector("#container");
const counterSpan = document.querySelector("#span-counter");
const widthInput = document.querySelector("#input-width");
const heightInput = document.querySelector("#input-height");
const generateForm = document.querySelector("#form-generate");

// Ide jön a megoldásod!
const treasureCoords = {
  x: random(0, 13),
  y: random(0, 9),
};
let clickCount = 0;
const visitedCells = [];

console.log(treasureCoords);

function onTableClick(event) {
  if (!event.target.matches("td")) {
    return;
  }

  const td = event.target;
  const tdCoords = xyCoord(td);
  
  if (visitedCells.some((visitedCoords) => coordsEqual(visitedCoords, tdCoords))) {
    return;
  }
  
  clickCount += 1;
  visitedCells.push(tdCoords);

  const hue = distanceHue(treasureCoords.x, treasureCoords.y, tdCoords.x, tdCoords.y);
  console.log(hue);
  td.style.backgroundColor = `hsla(${hue}, 100%, 50%, 0.7)`;

  if (coordsEqual(treasureCoords, tdCoords)) {
    td.classList.add("treasure");
  }

  counterSpan.textContent = clickCount;
}

containerDiv.addEventListener("click", onTableClick);
