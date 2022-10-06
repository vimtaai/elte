console.log("Hello world");

function generateRandomInteger(maxValue) {
    return Math.floor(Math.random() * (maxValue + 1));
}

function generateRandomColor() {
    let red = generateRandomInteger(255);
    let green = generateRandomInteger(255);
    let blue = generateRandomInteger(255);

    return `rgb(${red}, ${green}, ${blue})`;
}

// 1. Finding elements on the page
const buttons = [
    document.querySelector("button:nth-child(1)"),
    document.querySelector("button:nth-child(2)"),
    document.querySelector("button:nth-child(3)")
];

const colorExample = document.querySelector("div");
const output = document.querySelector("output");

const colors = [
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor()
];

buttons[0].textContent = colors[0];
buttons[1].textContent = colors[1];
buttons[2].textContent = colors[2];

let goodAnswerIndex = generateRandomInteger(2);
colorExample.style.backgroundColor = colors[goodAnswerIndex];

// 2. Creating event handler function
// const onButtonClick = (index) => () => {
//     if (goodAnswerIndex === index) {
//         output.textContent = "😊";
//     } else {
//         output.textContent = "😒";
//     }
// }

function onButtonClick(index) {
    return function() {
        if (goodAnswerIndex === index) {
            output.textContent = "😊";
        } else {
            output.textContent = "😒";
        }
    }
}

// 3. Attaching event handler to element
buttons[0].addEventListener("click", onButtonClick(0));
buttons[1].addEventListener("click", onButtonClick(1));
buttons[2].addEventListener("click", onButtonClick(2));