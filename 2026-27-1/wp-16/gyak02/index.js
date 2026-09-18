const headingElements = Array.from(document.querySelectorAll("h1, h2, h3"));
const headingList = headingElements.map((element) => element.textContent);
const tocElement = document.querySelector("#toc");
const tocGenerateButtonElement = tocElement.querySelector("button");

function renderTOCListItem(itemText) {
  return `<li>${itemText}</li>`;
}

function renderTOCList(headings) {
  return headings.map(renderTOCListItem).join("\n");
}

function onGenerateButtonClick() {
  tocElement.innerHTML = `
    <ul>
      ${renderTOCList(headingList)}
    </ul>
  `;
}

tocGenerateButtonElement.addEventListener("click", onGenerateButtonClick);