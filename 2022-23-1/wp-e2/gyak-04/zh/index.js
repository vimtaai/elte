import { people } from "./data.js";

const peopleLivingInMexico = people.filter(person =>
  person.location.country === "Mexico"
);

const namesOfPeopleLivingInMexico = peopleLivingInMexico.map(getName);

function getName(person) {
  return `${person.name.first} ${person.name.last}`;
}

console.log(namesOfPeopleLivingInMexico.join("\n"));

const randomPersonButton = document.querySelector("#random");

randomPersonButton.addEventListener("click", onRandomPersonButtonClickLogAddress);
randomPersonButton.addEventListener("click", onRandomPersonButtonClickUpdateCard)

function onRandomPersonButtonClickLogAddress() {
  const randomPersonIndex = Math.floor(Math.random() * people.length);
  const randomPerson = people[randomPersonIndex];
  const randomPersonAddress = getAddress(randomPerson);

  console.log(randomPersonAddress);
}

function getAddress(person) {
  return `
    ${person.location.street.number}
    ${person.location.street.name},
    ${person.location.city},
    ${person.location.country}
  `;
}

const personProfileImage = document.querySelector("#profile");
const personName = document.querySelector("#name");
const personAddress = document.querySelector("#address");
const personEmail = document.querySelector("a");

function onRandomPersonButtonClickUpdateCard() {
  const randomPersonIndex = Math.floor(Math.random() * people.length);
  const randomPerson = people[randomPersonIndex];
  updateCard(randomPerson);
}

function updateCard(person) {
  personProfileImage.src = person.profilePicture;
  personName.textContent = getName(person);
  personAddress.textContent = getAddress(person);
  personEmail.href = `mailto:${person.email}`;
}

const getListButton = document.querySelector("#getList");
const listSelect = document.querySelector("#list");

getListButton.addEventListener("click", onGetListButtonClick);

function onGetListButtonClick() {
  listSelect.innerHTML = renderListOptions(people);
}

function renderListOptions(people) {
  return people.map((person, index) => renderListOption(person, index)).join("\n");
}

function renderListOption(person, index) {
  return `<option value="${index}">${getName(person)}</option>`;
}

listSelect.addEventListener("change", onListSelectChange);

function onListSelectChange() {
  const personIndex = listSelect.value;
  const person = people[personIndex];
  updateCard(person);
}