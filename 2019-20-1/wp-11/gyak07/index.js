import { apiUrl } from "./api.js";
import { renderFilmList } from "./render.js";
import { isFilmStored, toggleStoredFilm, StoredState } from "./storage.js";

const search = document.querySelector("input[type=search]");
const table = document.querySelector("table tbody");
const article = document.querySelector("article");
const posterImage = article.querySelector("img");
const title = article.querySelector("h1");
const plot = article.querySelector("p");
const button = article.querySelector("button");

async function handleSearchInput() {
  const query = `s=${search.value}`;
  const requestUrl = apiUrl + query;

  const response = await fetch(requestUrl);
  // console.log(response);
  const data = await response.json();
  console.log(data);

  table.innerHTML = renderFilmList(data.Search);
}
search.addEventListener("input", handleSearchInput);

async function handleFilmClick(event) {
  let target = event.target;
  if (target.tagName === "TD") {
    target = target.parentNode;
  }
  const query = `i=${target.dataset.id}`;
  const requestUrl = apiUrl + query;

  const response = await fetch(requestUrl);
  const data = await response.json();


  posterImage.src = data.Poster;
  title.innerHTML = data.Title;
  plot.innerHTML = data.Plot;
  article.classList.add("visible");
  button.dataset.id = data.imdbID;
  button.innerText = isFilmStored(data.imdbID) ? "Unfavorite" : "Favorite";
  // console.log(data);
}
table.addEventListener("click", handleFilmClick);


function handleButtonClick(event) {
  const id = event.target.dataset.id;
  const toggleStatus = toggleStoredFilm(id);
  button.innerText = 
    toggleStatus === StoredState.ADDED ? "Unfavorite" : "Favorite";
}
button.addEventListener("click", handleButtonClick);



