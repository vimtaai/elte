// $ segédfüggvény
const $ = (selector) => document.querySelector(selector);

// feldolgozó függvény (üzleti logika)
function isNumber(x) {
    return !isNaN(parseFloat(x));
}

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

function calcExpr(expr) {
    const parts = expr.split(' ');
    const stack = [];
    for (let part of parts) {
        let val = part;
        if (isNumber(val)) {
            while (stack.length >= 1 && isNumber(stack[stack.length - 1])) {
                const a = stack.pop();
                const op = stack.pop();
                val = calc(a, val, op);
            }
        }

        stack.push(val);
    }
    return stack.pop();
}

// eseménykezelő függvény
function buttonClick() {
    // beolvasás
    const a = $('input[type=text]').value;

    // feldolgozás
    const result = calcExpr(a);

    // kiírás
    $('output').innerHTML = result;
}

$('input[type=button]').addEventListener('click', buttonClick);