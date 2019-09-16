// console.dir(document.children[0].children[1].children[0].children[0]);

// const span = document.querySelector("div span");
// console.dir(span);
// console.log(span.innerHTML);
// span.innerHTML = "<b>korte</b>";
// console.log(span.id);

// Ezt szeretném, ha történne, ha egy gombra kattintok
function calc() {
    // Beolvasás
    const inputA = document.querySelector("input:first-of-type");
    const a = parseFloat(inputA.value);
    const inputB = document.querySelector("input:nth-of-type(2)");
    const b = parseFloat(inputB.value);

    // Feldolgozás
    const c = a + b;

    // Kiírás
    const output = document.querySelector("output");
    output.innerHTML = c;
}
document
    .querySelector("button")
    .addEventListener("click", calc);

// deprecated
// document.querySelector("button").onclick = calc;

// eseménykezelő függvény
function handleRangeChange() {
    // beolvasás
    const range = document.querySelector("#range");
    const value = range.value;
    // feldolgozás (-)
    // kiírás
    const output = document.querySelector("#rangeValue");
    output.innerHTML = value;
}
document
    .querySelector("#range")
    .addEventListener("change", handleRangeChange);


function handleCardChange() {
    const card = document.querySelector("#card");

    if (card.value.length === 4 ||
        card.value.length === 9 ||
        card.value.length === 14) {
        card.value += " ";
    }

    const type = document.querySelector("#cardType");
    if (card.value.length > 0) {
        if (card.value[0] === "4") {
            type.innerHTML = "Visa";
        } else if (card.value[0] === "5") {
            type.innerHTML = "MC";
        } else {
            type.innerHTML = "Invalid";
        }
    } else {
        type.innerHTML = "";
    }
}
document
    .querySelector("#card")
    .addEventListener("input", handleCardChange);

const minValue = 0;
const maxValue = 10;
const minus = document.querySelector("[value='-']");
const plus = document.querySelector("[value='+']");

function handleMinusClick() {
    const number = document.querySelector("#number");
    number.value = parseInt(number.value) - 1;    
    if (parseInt(number.value) === minValue) {
        minus.disabled = true;
    }
    plus.disabled = false;
}
function handlePlusClick() {
    const number = document.querySelector("#number");
    number.value = parseInt(number.value) + 1;    
    if (parseInt(number.value) === maxValue) {
        plus.disabled = true;
    }
    minus.disabled = false;    
}
minus.addEventListener("click", handleMinusClick);
plus.addEventListener("click", handlePlusClick);
