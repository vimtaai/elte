import { renderList, renderFavorites } from "./render.js";

// ! API KEY: 62fdf8a6

const apiKey = "62fdf8a6";
const apiUrl = `http://omdbapi.com/?apikey=${apiKey}&`;

const search = document.querySelector("[type=search]");
async function handleSearchInput() {
    const query = search.value;
    const requestQuery = `s=${query}`;

    // ! elküldöm a kérést
    // fetch(apiUrl + requestQuery)
    //     // ! ha a promise resolve-olódott
    //     .then(response => {
    //         return response.text();
    //     })
    //     // ! kinyerem a tartalmat a válaszból
    //     .then(text => {
    //         console.log(text);
    //     });
    const response = await fetch(apiUrl + requestQuery);
    const films = await response.json();
    console.log(films);
    
    if (films.Response === "False") {
        search.classList.add("toomany");
    } else {
        const ul = document.querySelector("#search");
        search.className = "";

        const sortedList = films.Search.sort((f1, f2) => 
            parseInt(f1.Year) - parseInt(f2.Year))

        renderList(sortedList, ul);
    }
}
search.addEventListener("input", handleSearchInput);

const searchResults = document.querySelector("#search");
async function handleButtonClick(event) {
    if (!event.target.dataset.id) {
        return;
    }

    // ! lekérem a film adatait
    const response = await fetch(apiUrl + `i=${event.target.dataset.id}`);
    const filmData = await response.json();

    // ! eltároljuk a localstorageban
    // console.log(event.target.dataset.id);
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(JSON.stringify(filmData));
    localStorage.setItem("favorites", JSON.stringify(favorites));

    renderFavorites();
}
searchResults.addEventListener("click", handleButtonClick);

renderFavorites();