// SEGÉDFÜGGVÉNYEK
function $(s) {
    return document.querySelector(s);
}

function delegate(pSel, type, cSel, fn) {
    const parent = $(pSel);

    //var handler = function () {}
    function handler(event) {
        let target = event.target;
        while (target !== parent && !target.matches(cSel)) {
            target = target.parentNode;
        }
        if (target === parent) {
            return;
        }
        event.delegatedTarget = target;
        fn.call(parent, event);
    }

    parent.addEventListener(type, handler, false);
}

// ADATOK ÉS FELDOLGOZÓK
let o1, o2, op, isLastOp = false;

function calc(a, b, o) {
    switch (o) {
        case '+': return a + b;
            break;
        case '-': return a - b;
            break;
        case '/': return a / b;
            break;
        case '×': return a * b;
            break;
    }
}

// ESEMÉNYKEZELŐK
function clickButton(event) {
    let btn = event.delegatedTarget.getAttribute('data-value');
    if (!isNaN(parseInt(btn))) { // Ha szám
        if (isLastOp) {
            $('output').innerHTML = btn;
            isLastOp = false;
        } else {
            $('output').innerHTML += btn;
        }
    } else if (btn === '=') { // Ha egyenlő
        isLastOp = true;
        o2 = parseInt($('output').innerHTML);
        $('output').innerHTML = calc(o1, o2, op);
        o1 = undefined;
        o2 = undefined;
        op = undefined;
    } else { // Műveleti jel
        isLastOp = true;
        if (o1 !== undefined && op !== undefined) {
            o2 = parseInt($('output').innerHTML);
            $('output').innerHTML = calc(o1, o2, op);
            op = btn;
            o1 = parseInt($('output').innerHTML);
            o2 = undefined;
        } else {
            op = btn;
            o1 = parseInt($('output').innerHTML);
        }
    }
    console.log(o1, o2, op);
}
//$('table').addEventListener('click', clickButton, false);
delegate('table', 'click', 'button', clickButton)