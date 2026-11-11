const form = document.querySelector("form");
const bgInput = document.querySelector("#background-image");
const addresseeInput = document.querySelector("#addressee");
const senderInput = document.querySelector("#sender");
const contentsFieldset = form.querySelector(".contents");
const contentTextarea = contentsFieldset.querySelector("textarea");
const alignRadio = form.elements["align1"];

const postcardSection = document.querySelector("#postcard");
const addresseeHeading = postcardSection.querySelector("h1");
const senderFooter = postcardSection.querySelector("footer");
const contentsDiv = postcardSection.querySelector(".contents");
const contentPar = contentsDiv.querySelector("p");

// Ide írd a megoldásodat!
function onFormInput() {
  console.log(bgInput.value);
  postcardSection.style.backgroundImage = `url(${bgInput.value})`;
  addresseeHeading.textContent = addresseeInput.value;
  senderFooter.textContent = senderInput.value;
  contentPar.textContent = contentTextarea.value;
  contentPar.style.textAlign = alignRadio.value;
}

form.addEventListener("input", onFormInput);