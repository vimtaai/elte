export const StoredState = {
  ADDED: 1,
  REMOVED: 2
}

function getStoredData() {
  return JSON.parse(localStorage.getItem("data")) || [];
}

export function isFilmStored(filmID) {
  const data = getStoredData();
  const index = data.indexOf(filmID);
  return index !== -1;
}

export function toggleStoredFilm(filmID) {
  const data = getStoredData();
  const index = data.indexOf(filmID);

  let returnValue;
  if (index === -1) {
    // ! ha nem volt benne
    data.push(filmID);
    returnValue = StoredState.ADDED;
  } else {
    // ! ha benne volt
    data.splice(index, 1);
    returnValue = StoredState.REMOVED;
  }

  localStorage.setItem("data", JSON.stringify(data));
  return returnValue;
}