import { apiKey } from "./apikey.js";
import { AppState } from "./state.js";

const title = document.querySelector("#title");
const searchButton = document.querySelector("button");
const results = document.querySelector("#results");
const favorites = document.querySelector("#favorites");

const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

const state = new AppState();

async function getMovies() {
  const searchValue = title.value;
  try {
    const response = await fetch(`${apiUrl}&s=${searchValue}&page=${state.page}`);
    const data = await response.json();
    state.resultList = data.Search;
    console.log(data);
    results.innerHTML = `
      ${renderPagination(data.totalResults)}
      ${renderResults(data.Search)}
    `;
  } catch (error) {
    results.innerHTML = "Could not reach server";
  }
}

function handleSearchButtonClick() {
  state.page = 1;
  getMovies();
}
searchButton.addEventListener("click", handleSearchButtonClick);

function handlePaginationClick(event) {
  if (!event.target.matches("button")) {
    return;
  }

  if (event.target.matches("#prev")) {
    state.page = Math.max(state.page - 1, 1);
  } else if (event.target.matches("#next")) {
    state.page++;
  }

  getMovies();
}
results.addEventListener("click", handlePaginationClick);

function handleResultClick(event) {
  const result = event.target.closest(".result");

  if (!result) {
    return;
  }

  const idx = result.dataset.idx;
  const movie = state.resultList[idx];
  state.favoriteList.push(movie);
  favorites.innerHTML = renderFavorites(state.favoriteList);
}
results.addEventListener("click", handleResultClick);

function renderResults(results) {
  return results.map((result, idx) => `
    <div class="result" data-idx="${idx}">
      <strong>${result.Title}</strong> <em>${result.Year}</em>
    </div>
  `).join("\n");
}

function renderPagination(totalResults) {
  const start = (state.page-1) * 10 + 1;
  return `
    <button id="prev">Previous</button>
    Showing ${start} - ${start+9} of ${totalResults}
    <button id="next">Next</button>
  `;
}

function renderFavorites(favorites) {
  return favorites.map(favorite => `
    <strong>${favorite.Title}</strong> <em>${favorite.Year}</em><br>
  `).join("\n");
} 