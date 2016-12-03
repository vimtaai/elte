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
    //console.log(event.keyCode);
    if ((event.keyCode <= '9'.charCodeAt(0) && event.keyCode >= '0'.charCodeAt(0)) ||
        (event.keyCode == '.'.charCodeAt(0) && $('#output').innerHTML.indexOf('.') == -1)) {
        //$('#output').innerHTML += (event.keyCode - '0'.charCodeAt(0));
        $('#output').innerHTML += String.fromCharCode(event.keyCode);
    }
}

function keyDownEvent(event) {
    console.log(event.keyCode);
    if (event.keyCode == 27) {
        clear();
    } else if (event.keyCode == 8) {
        $('#output').innerHTML =
            $('#output').innerHTML.slice(0, -1);
        //var output = $('#output');
        //output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1);
    }
    // 106, 107, 109, 111
    var operators = {
        106: '*',
        107: '+',
        109: '-',
        111: '/'
    };

    if (operators.hasOwnProperty(event.keyCode)) {
        operator = operators[event.keyCode];
        operand1 = parseFloat($('#output').innerHTML);
        $('#output').innerHTML = '';
    }

    /*switch (event.keyCode) {
        case 106:
        case 107:
        case 109:
        case 111:
            operator = operators[event.keyCode];
            operand1 = parseFloat($('#output').innerHTML);
            $('#output').innerHTML = '';
            break;
    }*/

    // Enter lenyomásra végezzük el a számolást
    if (event.keyCode == 13) {
        calculate();
    }
}

function clear() {
    $('#output').innerHTML = '';
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

    $('#clear').addEventListener('click', clear);

    window.addEventListener('keypress', keyPressEvent);
    window.addEventListener('keydown', keyDownEvent);
}



window.addEventListener('load', init);
