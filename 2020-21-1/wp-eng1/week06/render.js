// Rendering
// Set of functions
// Takes (a part of) the state and outputs HTML
import { Stage } from "./state.js";

export function render(state) {
  return `
    ${renderStage(state.stage)}
    ${renderBoard(state.board)}
  `;
}

function renderStage(stage) {
  let symbol = "";

  if (stage === Stage.PLAYING) {
    symbol = "🙂";
  } else if (stage === Stage.DEFEAT) {
    symbol = "😭";
  } else if (stage === Stage.VICTORY) {
    symbol = "😎";
  }

  return `<div class="stage">${symbol}</div>`
}

// Functional style
// Higher-order functions
function renderBoard(board) {
  return `<table>${board.map(renderRow).join("\n")}</table>`;
}

function renderRow(row) {
  return `<tr>${row.map(renderField).join("\n")}</tr>`;
}

// Map of colors [neigborCount] : [color]
const colors = {
  1: "blue", 
  2: "green", 
  3: "red",
  4: "purple",
  5: "cyan",
  6: "magenta",
  7: "maroon",
  8: "olive"
}

function renderField(field) {
  let symbol = "";
  let color = "black";

  if (field.isRevealed) {
    if (field.isMine && !field.isExploded) {
      symbol = "💣"; // Win + .
    } else if (field.isMine && field.isExploded) {
      symbol = "💥";
    } else if (field.neighborCount !== 0) {
      symbol = field.neighborCount;
      // Color lookup
      color = colors[field.neighborCount];
    }

    return `<td style="color: ${color}">${symbol}</td>`;
  } else {
    if (field.isFlagged) {
      symbol = "🚩";
    } else {
      symbol = "&nbsp;";
    }

    return `<td><button>${symbol}</button></td>`;
  }
}

// Imperative style programming
// Sequential computing for matrix
// function renderBoard(board) {
//   let html = "<table>";

//   for (let row of board) {
//     html += "<tr>";
//     for (let field of row) {
//       html += "<td>";
//       html += field.isMine ? "X" : "0";
//       html += "</td>";
//     }
//     html += "</tr>";
//   }

//   html += "</table>";

//   return html;
// }
