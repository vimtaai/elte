import { keyboardKeys } from "./keys.js";

const inputElement = document.querySelector("#input");
const keyboardElement = document.querySelector("#keyboard");

keyboardElement.addEventListener("click", onKeyClick);

function onKeyClick(event) {
    if (!event.target.matches("td")) {
        return;
    }

    const keyElement = event.target;

    if (keyElement.textContent === " ") {
        return;
    }

    inputElement.value += keyElement.textContent;
}

window.addEventListener("load", onWindowLoad);

function onWindowLoad() {
    keyboardElement.innerHTML = renderKeyboard(keyboardKeys);
}

function renderKeyboard(keys) {
    return `<table>${keys.map(renderRow).join("\n")}</table>`;
}

function renderRow(row) {
    return `<tr>${[...row].map(renderKey).join("\n")}</tr>`;
}

function renderKey(key) {
    return `<td>${key}</td>`;
}