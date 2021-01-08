const data = [
  "#include &lt;iostream&gt;",
  "",
  "using namespace std;",
  "",
  "int main() {",
  "  return 0;",
  "}",
];

const button = document.querySelector("button");
const code = document.querySelector("#example code");

function renderCode(data) {
  // return data.map((row, index) => renderLine(row, index)).join("\n");
  // VAGY
  let html = ``;
  for (let i = 0; i < data.length; i++) {
    html += renderLine(data[i], i) + "\n";
  }
  return html;
}

function renderLine(row, rowIndex) {
  return `<span data-line="${rowIndex + 1}">${row}</span>`;
}

function handleButtonClick() {
  code.innerHTML = renderCode(data);
}
button.addEventListener("click", handleButtonClick);
