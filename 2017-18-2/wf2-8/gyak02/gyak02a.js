// function $(selector) {
//     return document.querySelector(selector);
// } 

// const $ = function (selector) {
//     return document.querySelector(selector);
// }

// $ segédfüggvény
const $ = (selector) => document.querySelector(selector);

// feldolgozó függvény (üzleti logika)
function calc(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '×':
            return a * b;
        case '÷':
            return a / b;
        default:
            return NaN;
    }
}

// eseménykezelő függvény
function buttonClick() {
    //alert('I\'ve been clicked');
    // beolvasás
    const o = $('select').value;
    const a = $('input[type=text]:nth-of-type(1)').value;
    const b = $('input[type=text]:nth-of-type(2)').value;

    // feldolgozás
    const result = calc(a, b, o);

    // kiírás
    $('output').innerHTML = result;
}

$('input[type=button]').addEventListener('click', buttonClick);

// $('input[type=button]').addEventListener('click', function () {
//     alert('I\'ve been clicked');
// });