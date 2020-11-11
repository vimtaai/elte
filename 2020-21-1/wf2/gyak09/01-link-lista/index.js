// 1. feladat
// Linkre kattintva írjuk ki a konzolra, hogy hova mutat a link
// 2. feladat
// Linkre kattintva ne történjen navigálás
// 3. feladat
// Linkre kattintva változzon pirosra a színe

const ul = document.querySelector("ul");
const urlInput = document.querySelector("#url");
const nameInput = document.querySelector("#name");
const button = document.querySelector("button");
// const links = document.querySelectorAll("ul li a");

function handleLinkClick(event) {
  // this: kezelőobjektum
  // event.target: eseményt kiváltó objektum (forrásobjektum)
  // Ha a forrásobjektum nem link, akkor ne történjen semmi
  if (!event.target.matches("a")) {
    return;
  }

  // Alapértelmezett működés letiltása
  event.preventDefault();

  // Színváltoztatás
  event.target.style.color = "red";

  console.log(event.target.href);
}

// Delegálás
ul.addEventListener("click", handleLinkClick);

// for (let link of links) {
//   link.addEventListener("click", handleLinkClick);
// }

function handleButtonClick() {
  // Beolvasás
  let url = urlInput.value;
  let name = nameInput.value;
  // Létrehozom az új elemet
  let li = document.createElement("li");
  li.innerHTML = `<a href="${url}">${name}</a>`;
  // li.addEventListener("click", handleLinkClick);
  // Beszúrom a felsorolásba
  ul.appendChild(li);
}
button.addEventListener("click", handleButtonClick);