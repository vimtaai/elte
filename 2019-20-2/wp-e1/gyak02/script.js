// 1. eseményt kiváltó elem
const minusButton = document.querySelector("button:first-of-type");
const plusButton = document.querySelector("button:nth-of-type(2)");
const input = document.querySelector("input");

// 3. eseménykezelő függvény
function handleMinusButtonClick() {
    // Beolvasás (DOM)
    const oldValue = parseInt(input.value) || 0;
    // Feldolgozás (tiszta JS)
    const newValue = oldValue - 1;
    // Kiírás (DOM)
    input.value = newValue;
}

// 2. milyen esemény (összekapcsolás)
minusButton.addEventListener("click", handleMinusButtonClick);

function handlePlusButtonClick() {
    const oldValue = parseInt(input.value) || 0;
    input.value = oldValue + 1;
}

plusButton.addEventListener("click", handlePlusButtonClick);


/// --------

const slider = document.querySelector("input[type=range]");
const sliderValue = document.querySelector("span");

function handleSliderInput() {
    const value = slider.value;
    const min = slider.min;
    const max = slider.max;
    const percentage = (value - min) / (max - min);
    
    sliderValue.innerHTML = value;
    sliderValue.style.left = `${percentage * 100}%`;
}

slider.addEventListener("input", handleSliderInput);