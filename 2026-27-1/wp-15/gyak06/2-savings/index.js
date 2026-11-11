const form = document.querySelector("form");
const divContainer = document.querySelector(".container");
const inputElements = form.querySelectorAll("input");

let totalConsumption = 0;

function calculateTotalConsumption() {
  totalConsumption = 0;
  for (const inputElement of inputElements) {
    const maxConsumption = Number(inputElement.dataset.consumption);
    totalConsumption += maxConsumption;
    const value = inputElement.value;
    const max = inputElement.getAttribute("max");
    const currentConsumption = value / max * maxConsumption;
    console.log(currentConsumption);
  }
  console.log(totalConsumption);
}

function updateChart() {
  for (const inputElement of inputElements) {
    const id = inputElement.id;
    const labelElement = document.querySelector(`label[for=${id}]`);
    const maxConsumption = Number(inputElement.dataset.consumption);
    const value = inputElement.value;
    const max = inputElement.getAttribute("max");
    const currentConsumption = value / max * maxConsumption;
    labelElement.style.width = `${currentConsumption / totalConsumption * 100}%`;
  }
}

function onSliderChange() {
  updateChart();
}

form.addEventListener("input", onSliderChange);

calculateTotalConsumption();
updateChart();
