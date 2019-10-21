import { loadFromStorage } from "./storage.js";

export function renderSearchResults(searchResults) {
    const books = searchResults.docs;

    // console.log(books.map(book=>book.author_name));
    
    return books.map(book => 
        `<li>
            ${(book.author_name || []).join()}: 
            ${book.title} 
            (${(book.publish_year || []).join(",")})
        </li>`
    ).join("");
}

export function renderFavorites() {
    const books = loadFromStorage();

    return books.map(book => `<li>${book}</li>`).join("");
}