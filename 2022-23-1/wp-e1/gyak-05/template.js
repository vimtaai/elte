export function renderDrawing(drawing) {
  return `
    <table>${drawing.map(renderRow).join("\n")}</table>
  `;
}

function renderRow(row) {
  return `
    <tr>${row.map(renderCell).join("\n")}</tr>
  `;
}

function renderCell(cell) {
  return `
    <td></td>
  `;
}
