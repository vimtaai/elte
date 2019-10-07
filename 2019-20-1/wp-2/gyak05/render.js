import { Status } from "./state.js";

// ! HTML generátor
// ! in: state; out: HTML
export function render(root, state) {
  let html = "<table>";
  html += renderSmiley(state.status);
  html += state.board.map(renderRow).join("");  
  html += "</table>";
  root.innerHTML = html;
}

function renderSmiley(status) {
  let html = "<caption>";
  if (status === Status.PLAYING) {
    html += "🙂";
  } else if (status === Status.WIN) {
    html += "😎";
  } else if (status === Status.LOSE) {
    html += "😥";
  }
  html += "</caption>";
  return html;
}

function renderRow(row) {
  let html = "<tr>";
  html += row.map(renderField).join("");
  html += "</tr>";
  return html;
}

function renderField(field) {
  let html = "<td>";
  if (field.isRevealed) {
    html += field.isMine ? "💣" : (field.neighborCount === 0 ? "" : field.neighborCount);
  } else {
    html += "<button>";
    if (field.isFlagged) {
      html += "🏴";
    }
    html += "</button>";
  }
  html += "</td>";
  return html;
}