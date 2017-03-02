// SEGÉDFÜGGVÉNYEK
function $(s) {
    return document.querySelector(s);
}

function delegate(parentSelector, eventType, childSelector, fn) {
    const parent = $(parentSelector); // A szülőelem DOM objektuma

    // var handler = function () {}
    function handler(event) {
        let target = event.target;
        while (target !== parent && !target.matches(childSelector)) {
            target = target.parentNode;
        }
        if (target === parent) { // Ha nem találtam illeszkedő gyereket
            return; // Akkor ne történjen semmi
        }
        event.delegatedTarget = target;
        //fn(event);
        fn.call(parent, event);
    }
    parent.addEventListener(eventType, handler, false);
}

// ADATOK, FELDOLGOZÓK
let o1, o2, op;

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
function clickButton(event) {
    //console.log(event);
    // console.log(this);
    // console.log(event.target);
    // console.log(event.delegatedTarget);
    //if (event.target.matches('button')) {
        //console.log(event);
    //}

    const button = event.delegatedTarget;
    console.log(button);
    if (!isNaN(parseInt(button.innerHTML))) { // Ha szám
        $('#_screen').innerHTML += button.innerHTML;
    } else if (button.innerHTML === '=') { // Ha egyenlő
        o2 = parseInt($('#_screen').innerHTML);
        let result = calculate(o1, o2, op);
        $('#_screen').innerHTML = result;
        o1 = result;
        o2 = undefined;
        op = undefined;
    } else { // Műveleti jel
        if (o1 !== undefined && op !== undefined) {
            o2 = parseInt($('#_screen').innerHTML);
            let result = calculate(o1, o2, op);
            $('#_screen').innerHTML = result;
            o1 = result;
            o2 = undefined;
            op = button.innerHTML;
        } else {
            op = button.innerHTML;
            o1 = parseInt($('#_screen').innerHTML);        
        }
        $('#_screen').innerHTML = '';
    }
    console.log(o1, o2, op);
}
//$('#_calculator').addEventListener('click', clickButton, false);
delegate('#_calculator', 'click', 'button', clickButton);