// $ segédfüggvény
function $(selector) {
    return document.querySelector(selector);
}

// feldolgozó függvény (üzleti logika)
function calc(a, b, operator) {
    if (typeof a != 'number' ||
        typeof b != 'number' ||
        !['+', '-', '×', '÷'].includes(operator)) {
        return;
    }
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

// eseménykezelő függvény
function buttonClick() {
    // beolvasás
    const a = parseFloat($('#a').value);
    const b = parseFloat($('#b').value);
    const o = $('select').value;
    // feldolgozás
    const result = calc(a, b, o);
    // kiírás
    $('output').innerHTML = result;
}

$('input[type=button]').addEventListener('click', buttonClick);
