// const paragraphElements = document.querySelectorAll("p");
// const strongTexts = [];

// for (const paragraphElement of paragraphElements) {
//     const strongElements = paragraphElement.querySelectorAll("strong");

//     for (const strongElement of strongElements) {
//         strongTexts.push(strongElement.textContent);
//     }
// }

const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", onButtonClick);

function onButtonClick() {
  const strongTexts = Array.from(document.querySelectorAll("p strong"))
    .map((element) => element.textContent);
  const outputElement = document.querySelector("output");
  outputElement.innerHTML = renderList(strongTexts);
}

function renderList(list) {
  return `<ul>
        ${list.map(renderListItem).join("\n")}
    </ul>`;
}

function renderListItem(text) {
  return `<li>${text}</li>`;
}

// const renderListItem = (text) => `<li>${text}</li>`;
// let outputHTML = "<ul>";
// for (const strongElement of strongTexts) {
//     outputHTML += `<li>${strongElement}</li>`;
// }
// outputHTML += "</ul>";