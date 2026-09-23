const headingElements = Array.from(document.querySelectorAll("h1, h2, h3"));
const headingList = headingElements.map((element) => element.textContent);
const tocElement = document.querySelector("#toc");
const tocGenerateButtonElement = tocElement.querySelector("button");

function renderTOCListItem(itemText) {
  return `${itemText}\n`;
}

function renderTOCList(headings) {
  let currentLevel = 0;
  let html = "";

  for (const headingElement of headingElements) {
    const headingLevel = Number(headingElement.tagName[1]);
    const headingText = headingElement.textContent;

    if (headingLevel > currentLevel) {
      html += `\n<ul>\n`;
    } else if (headingLevel < currentLevel) {
      html += `\n</ul>\n</li>`;
    } else {
      html += `</li>\n`;
    }

    html += `<li>${headingText}`;
    currentLevel = headingLevel;
  }

  for (let level = currentLevel; level > 0; level -= 1) {
    html += `</li>\n</ul>\n`;
  }

  return html;
}

function onGenerateButtonClick() {
  tocElement.innerHTML = renderTOCList(headingList);
}

tocGenerateButtonElement.addEventListener("click", onGenerateButtonClick);