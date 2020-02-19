// 1. eseményt kiváltó elem elérése
const minusButton = document.querySelector("div:first-of-type button:first-of-type");

// 3. eseménykezelő
function handleMinusButtonClick() {
    // Beolvasás (DOM)
    // 3/1. elem elérése
    const input = document.querySelector("input");
    // 3/2. tulajdonság kiolvasása
    const oldValue = parseInt(input.value) || 0;
    // Feldolgozás (tiszta JS)
    // 3/3. eredmény előállítása
    const newValue = oldValue - 1;
    // Kiírás (DOM)
    // 3/4. elem élérése, amibe szeretnék kiírni
    // u.a.
    // 3/5. kiírás
    input.value = newValue;
}

// 2. esemény típusa (hozzárendelés)
minusButton.addEventListener("click", handleMinusButtonClick);

/// VALÓJÁBAN
const plusButton = document.querySelector("div:first-of-type button:last-of-type");
const input = document.querySelector("input");

function handlePlusButtonClick() {
    const newValue = parseInt(input.value) || 0;
    input.value = newValue + 1;
}

plusButton.addEventListener("click", handlePlusButtonClick);

/// VALÓJÁBAN (CSÚNYÁN)
// document.querySelector("button:last-of-type").addEventListener("click", () => {
//     input.value = ((+input.value) || 0) + 1;
// });


const number = document.querySelector("div input[type=number]");
const div = document.querySelector("div div");

// function handleNumberInput() {
//     const newValue = parseFloat(number.value).toLocaleString();
//     div.innerHTML = newValue;
// }

function handleNumberInput() {
    const [integer, fraction] = number.value.split(".");
    let newInteger = "";
    let nextPart = "";
    for (let i = integer.length - 1; i >= 0; i--) {
        nextPart = integer[i] + nextPartp;

        if (nextPart.length === 3) {
            newInteger =  " " + nextPart + newInteger;
            nextPart = "";
        } 
    }
    newInteger = nextPart + newInteger;

    if (fraction) {
        div.innerHTML = newInteger + "," + fraction;
    } else {
        div.innerHTML = newInteger;
    }
}

number.addEventListener("input", handleNumberInput);

const creditCard = document.querySelector("div:nth-of-type(3) input");

function handleCreditCardInput() {
    const value = creditCard.value;
    if (value.length % 5 === 4) {
        creditCard.value += " ";
    }
}

creditCard.addEventListener("input", handleCreditCardInput);