// State
const movies = [
  {
    title: "The Emperor's New Groove",
    year: 2000,
    length: 78,
    directors: ["Mark Dindal"],
  },
  {
    title: "The Road to El Dorado",
    year: 2000,
    length: 85,
    directors: ["Bibo Bergeron", "Will Finn", "Don Paul", "David Silverman"],
  },
  {
    title: "Treasure Planet",
    year: 2002,
    length: 95,
    directors: ["Ron Clements", "John Musker"],
  },
  {
    title: "Aladdin",
    year: 1992,
    length: 90,
    directors: ["John Musker", "Ron Clements"],
  },
  {
    title: "Beauty and the Beast",
    year: 1991,
    length: 84,
    directors: ["Gary Trousdale", "Kirk Wise"],
  },
  {
    title: "Hercules",
    year: 1997,
    length: 93,
    directors: ["Ron Clements", "John Musker"],
  },
  {
    title: "Lilo & Stitch",
    year: 2000,
    length: 85,
    directors: ["Chris Sanders", "Dean DeBlois"],
  },
  {
    title: "The Little Mermaid",
    year: 1989,
    length: 84,
    directors: ["Ron Clements", "John Musker"],
  },
  {
    title: "Mulan",
    year: 1998,
    length: 87,
    directors: ["Barry Cook", "Tony Bancroft"],
  },
];

// References to DOM elements
const input = document.querySelector("input");
const results = document.querySelector("#results");

// 1. Look for an element that I want to make interactive
const button = document.querySelector("button");
// 2. Define the nature of the interaction (i.e. event handler)
function handleButtonClick() {
  const searchTerm = input.value;

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  console.log(filteredMovies.map(movie => movie.title));
  results.innerHTML = renderMovieList(filteredMovies);
}
// 3. Bind the interaction to an event of the element
button.addEventListener("click", handleButtonClick);

// Event handler
function handlePageLoad() {
  results.innerHTML = renderMovieList(movies);
}
// Event binding
window.addEventListener("load", handlePageLoad);

// HTML generators
function renderMovieList(movies) {
  return `<ul>
    ${movies.map(renderListItem).join("\n")}
  </ul>`;
}

function renderListItem(movie) {
  return `<li>${movie.title} (${movie.year})</li>`;
}