const alpha = document.querySelector("#x input");
const a = document.querySelector("#a output");
const b = document.querySelector("#b output");
const c = document.querySelector("#c input");

function degToRad(angle) {
  return angle / 180 * Math.PI;
}

function handleInputChange() {
  const alphaValue = degToRad(parseFloat(alpha.value));
  const cValue = parseFloat(c.value);

  b.innerHTML = (Math.cos(alphaValue) * cValue).toPrecision(3);
  a.innerHTML = (Math.sin(alphaValue) * cValue).toPrecision(3);
}

alpha.addEventListener("change", handleInputChange);
c.addEventListener("change", handleInputChange);