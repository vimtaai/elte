const a = document.querySelector("#a output");
const b = document.querySelector("#b output");
const c = document.querySelector("#c input");
const x = document.querySelector("#x input");

function handleInputChange() {
  const cValue = parseFloat(c.value);
  const xValue = (parseFloat(x.value) / 360) * (2 * Math.PI);
  a.innerText = Math.cos(xValue) * cValue;
  b.innerText = Math.sin(xValue) * cValue;
}
c.addEventListener("input", handleInputChange);
x.addEventListener("input", handleInputChange);
