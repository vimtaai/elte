// Rendering
// Set of functions
// Takes (a part of) the state and outputs HTML

export function render(state) {
  return renderBoard(state.board);
}

// Functional style
// Higher-order functions
function renderBoard(board) {
  return `<table>${board.map(renderRow).join("\n")}</table>`;
}

function renderRow(row) {
  return `<tr>${row.map(renderField).join("\n")}</tr>`;
}

function renderField(field) {
  return `<td>${field.isMine ? "X" : field.neighborCount}</td>`;
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