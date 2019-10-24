export function renderFilmList(filmList) {
  if (filmList === undefined) {
    return `<tr><td>Too many results</td></tr>`;
  }

  return filmList.map(film => 
    `<tr data-id="${film.imdbID}">
      <td>${film.Title}</td>
      <td>${film.Year}</td>
    </tr>`
  ).join("\n");
}