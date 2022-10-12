export function renderTable(drawing) {
  return `
    <table>${drawing.map(row => renderRow(row)).join("\n")}</table>
  `;
}

function renderRow(row) {
  return `<tr>${row.map(col => renderPixel(col)).join("\n")}</tr>`;
}

function renderPixel(color) {
  return `<td style="background-color: ${color}"></td>`;
}