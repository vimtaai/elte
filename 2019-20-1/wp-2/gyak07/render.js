export function renderList(filmList, root) {
    root.innerHTML = "";

    for (const film of filmList) {
        root.innerHTML += `<li>
            ${film.Title} (${film.Year})
            <button data-id="${film.imdbID}">⭐</button>
        </li>`;
    }
}

export function renderFavorites() {
    const favs = document.querySelector("#favs");

    const filmList = JSON.parse(localStorage.getItem("favorites")) || [];

    renderList(filmList.map(JSON.parse), favs);    
}