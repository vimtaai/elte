export function saveToStorage(book) {
    // ! Kiolvasom az eddig tárolt könyveket
    const savedBooks = loadFromStorage();
    // ! Belerakom az új könyvet
    savedBooks.push(book);
    // ! Visszaírom a storage-ba
    localStorage.setItem("books", JSON.stringify(savedBooks));
}

export function loadFromStorage() {
    return JSON.parse(localStorage.getItem("books")) || [];
}

export function deleteFromStorage(book) {
    const savedBooks = loadFromStorage();
    // ! Megkeressük a törlendőt
    const bookIndex = savedBooks.indexOf(book);
    // ! Töröljük
    savedBooks.splice(bookIndex, 1);
    // ! Elmentjük
    localStorage.setItem("books", JSON.stringify(savedBooks));
}