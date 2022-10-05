import { people } from "./data.js";

function getName(person) {
    return `${person.name.first} ${person.name.last}`;
}

function getDateOfBirth(person) {
    const [year, month, day] = person.dateOfBirth.split("-");

    return `19${year}. ${month}. ${day}.`;
}

function getMapLink(person) {
    const { street, city, country } = person.location;
    const addressQuery = `${street.number}+${street.name}+${city}+${country}`.replaceAll(" ", "+");

    return `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
}

const namesOfPeopleLivingInIndia = people
    .filter(person => person.location.country === "India")
    .map(person => getName(person))
    .join("\n");

console.log(namesOfPeopleLivingInIndia);

const randomPersonButton = document.querySelector("#random");
randomPersonButton.addEventListener("click", onRandomPersonButtonClick);

function onRandomPersonButtonClick() {
    const randomPersonIndex = Math.floor(Math.random() * people.length);
    const randomPerson = people[randomPersonIndex];

    logDateOfBirth(randomPerson);
    displayPersonDetails(randomPerson);
}

function logDateOfBirth(person) {
    console.log(getDateOfBirth(person));
}

const profilePicture = document.querySelector("#profile");
const name = document.querySelector("#name");
const dateOfBirth = document.querySelector("#dateOfBirth");
const mapLink = document.querySelector("#map");

function displayPersonDetails(person) {
    profilePicture.src = person.profilePicture;
    name.textContent = getName(person);
    dateOfBirth.textContent = getDateOfBirth(person);
    mapLink.href = getMapLink(person);
}

const listElement = document.querySelector("#list");
const getListButton = document.querySelector("#getList");
getListButton.addEventListener("click", onGetListButtonClick);

function onGetListButtonClick() {
    listElement.innerHTML = people
        .map(person => getName(person))
        .map(name => `<option>${name}</option>`)
        .join("\n");
}

listElement.addEventListener("change", onListChange);

function onListChange() {
    const name = listElement.value;
    const person = people.find(person => getName(person) === name);

    displayPersonDetails(person);
}