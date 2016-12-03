/**function $(id) {
    return document.getElementById(id);
}**/

function $(selector) {
    if (selector.charAt(0) == '#') {
        return document.getElementById(selector.substr(1));
    }
    return document.querySelectorAll(selector);
}

var operator;
var operand1;
var operand2;

function clickEvent() {
    //console.log(this);
    //console.log(event.target);

    /*if (this.innerHTML == ',' ||
            (this.innerHTML.charCodeAt(0) >= '0'.charCodeAt(0) &&
            this.innerHTML.charCodeAt(0) <= '9'.charCodeAt(0))) {*/
    if ('0123456789'.indexOf(this.innerHTML) != -1 ||
            (this.innerHTML == '.' && $('#output').innerHTML.indexOf('.') == -1)) {
        $('#output').innerHTML += this.innerHTML;
    }
}

function clickEvent2(event) {
    //console.log(this);
    //console.log(event.target);
    if (event.target.tagName ==  'BUTTON') {
        $('#output').innerHTML += event.target.innerHTML;
    }
}

function operatorEvent() {
    operator = this.innerHTML;
    operand1 = parseFloat($('#output').innerHTML);
    $('#output').innerHTML = '';
}

function calculate() {
    operand2 = parseFloat($('#output').innerHTML);
    switch (operator) {
        case '+':
            $('#output').innerHTML = operand1 + operand2;
            break;
        case '-':
            $('#output').innerHTML = operand1 - operand2;
            break;
        case '*':
            $('#output').innerHTML = operand1 * operand2;
            break;
        case '/':
            $('#output').innerHTML = operand1 / operand2;
            break;
    }
}

function keyPressEvent(event) {
    console.log(event.keyCode);
    if ((event.keyCode <= '9'.charCodeAt(0) && event.keyCode >= '0'.charCodeAt(0)) ||
        (event.keyCode == '.'.charCodeAt(0) && $('#output').innerHTML.indexOf('.') == -1)) {
        //$('#output').innerHTML += (event.keyCode - '0'.charCodeAt(0));
        $('#output').innerHTML += String.fromCharCode(event.keyCode);
    }
}

function init() {
    var buttons = $('button');
    for (var i = 0; i < buttons.length; ++i) {
        buttons.item(i).addEventListener('click', clickEvent);
    }
    var operators = $('button.operator');
    for (var i = 0; i < operators.length; ++i) {
        operators.item(i).addEventListener('click', operatorEvent);
    }
    //$('#calculator').addEventListener('click', clickEvent2);
    $('#calculate').addEventListener('click', calculate);

    window.addEventListener('keypress', keyPressEvent);
}



window.addEventListener('load', init);
