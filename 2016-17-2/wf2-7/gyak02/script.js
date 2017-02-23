// SEGÉDFÜGGVÉNYEK
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

// ADATOK ÉS FELDOLGOZÓK
let myHistory = [];

function calculate(a, b, o) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (o) {
        case '+': return a + b;
            break;
        case '-': return a - b;
            break;
        case '×': return a * b;
            break;
        case '/': return a / b;
            break;
    }
}

// ESEMÉNYKEZELŐK
//function buttonClick() {}
//function buttonClickHandler() {}
function clickButton() {
    // Beolvasás
    let a = $('#_operand1').value;
    let b = $('#_operand2').value;
    let o = $('#_operator').value;
    // Feldolgozás
    let result = calculate(a, b, o);
    myHistory.push({
        operand1: a,
        operand2: b,
        operator: o
    });
    // Kiírás
    $('#_result').innerHTML = result;
    //$('#_history').innerHTML = JSON.stringify(history);
    $('#_history').innerHTML = genTable(myHistory);
}
$('#_submit').addEventListener('click', clickButton, false);

function clickPlusGen(id) {
    return function () {
        $('#' + id).value = (parseFloat($('#' + id).value) || 0) + 1;
    }
}

function clickMinusGen(id) {
    return function () {
        $('#' + id).value = (parseFloat($('#' + id).value) || 0) - 1;
    }
}

// HTML GENERÁTOROK
function genTable(history) {
    let html = '';
    for (let i = 0; i < history.length; i++) {
        html += genRow(history[i]);
    }
    return html;
}

function genRow(item) {
    return `<tr><td>${item.operand1} ${item.operator} ${item.operand2}</td></tr>`;
}

function genPlus(id) {
    return `<button onclick="clickPlusGen('${id}')()">+</button>`;
}

function genMinus(id) {
    return `<button onclick="clickMinusGen('${id}')()">-</button>`;
}

// INICIALIZÁCIÓ
let inputs = $$('input[type=number]');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].outerHTML = 
        genMinus(inputs[i].getAttribute('id')) +
        inputs[i].outerHTML +
        genPlus(inputs[i].getAttribute('id'));
}