const buttonElement = document.querySelector("button");
const inputElements = document.querySelectorAll("input");
const tableBodyElement = document.querySelector("table tbody");

const data = [
  { name: "Lollipop", date: "2026-09-18", count: 1024 },
  { name: "Candy bar", date: "2026-09-13", count: 412 },
];

function renderTable(data) {
  return data.map((row) => `
    <tr>
      <td>${row.name}</td>
      <td>${row.date}</td>
      <td>${row.count}</td>
    </tr>
  `).join("\n");
}

function onButtonClick() {
  const inputValues = {};

  for (const input of inputElements) {
    inputValues[input.name] = input.type === "number" ? Number(input.value) : input.value;
  }

  data.push(inputValues);
  console.log(data);

  tableBodyElement.innerHTML = renderTable(data);

  for (input of inputElements) {
    input.value = "";
  }
}

buttonElement.addEventListener("click", onButtonClick);

tableBodyElement.innerHTML = renderTable(data);