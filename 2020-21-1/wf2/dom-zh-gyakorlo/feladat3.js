const x = document.querySelector("#x input");
const a = document.querySelector("#a output");
const b = document.querySelector("#b output");
const c = document.querySelector("#c input");

function degToRad(deg) {
  return (deg / 180) * Math.PI;
}

function handleValueChange() {
  const xValue = degToRad(parseFloat(x.value));
  const cValue = parseFloat(c.value);

  const aValue = (Math.sin(xValue) * cValue).toPrecision(3);
  const bValue = (Math.cos(xValue) * cValue).toPrecision(3);

  a.value = aValue;
  b.value = bValue;
}

x.addEventListener("input", handleValueChange);
c.addEventListener("input", handleValueChange);
