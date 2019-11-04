import { searchDatabase } from "./api.js";
import { renderSearchResults, renderFavorites } from "./render.js";
import { saveToStorage, deleteFromStorage } from "./storage.js";

const button = document.querySelector("button");
const search = document.querySelector("input");
const searchResults = document.querySelector("#searchResults");
const favorites = document.querySelector("#favorites");

async function handleButtonClick() {
    const query = search.value;
    const results = await searchDatabase(query);

    // console.log(results);
    searchResults.innerHTML = renderSearchResults(results);
}
button.addEventListener("click", handleButtonClick);

function handleBookItemClick(event) {
    // ! Csak ha egy LI-re kattintottam az UL-on belül
    if (event.target.tagName !== "LI") {
        return;
    }

    const li = event.target;
    const book = li.innerText;
    saveToStorage(book);
    favorites.innerHTML = renderFavorites();
}
searchResults.addEventListener("click", handleBookItemClick);

function handleFavoriteItemClick(event) {
    // ! Csak ha egy LI-re kattintottam az UL-on belül
    if (event.target.tagName !== "LI") {
        return;
    }

    const li = event.target;
    const book = li.innerText;
    deleteFromStorage(book);
    favorites.innerHTML = renderFavorites();
}
favorites.addEventListener("click", handleFavoriteItemClick);

function handleLoad() {
    favorites.innerHTML = renderFavorites();
}
window.addEventListener("load", handleLoad);