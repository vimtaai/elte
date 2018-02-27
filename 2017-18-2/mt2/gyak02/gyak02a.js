// $ segédfüggvény
function $(selector) {
    return document.querySelector(selector);
}

// Feldolgozó függvény (üzleti logika)
function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operator == '+') {
        return a + b;
    } else if (operator == '-') {
        return a - b;
    } else if (operator == '×') {
        return a * b;
    } else if (operator == '÷') {
        return a / b;
    }
}

// Eseménykezelő függvény
function buttonClick() {
    // Beolvasás
    const a = $('#a').value;
    const b = $('#b').value;
    const o = $('select').value;
    // Feldolgozás
    const result = calculate(a, b, o);
    // Kiírás
    $('output').innerHTML = result;
}

// const buttonClick = () => {
//     $('output').innerHTML = calculate($('#a').value, 
//                                       $('#b').value, 
//                                       $('select').value);
// }

// A gomb kattintás eseményéhez rendeljük a buttonClick függvényt
$('input[type=button]').addEventListener('click', buttonClick);