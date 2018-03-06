function $(selector) {
    return document.querySelector(selector);
}

function delegate(parent, type, selector, fn) {
    function delegatedFunction(e) {
        if (e.target.matches(`${selector},${selector} *`)) {
            let target = e.target;
            while (!target.matches(selector)) {
                target = target.parentNode;
            }
            e.delegatedTarget = target;
            return fn(e);
        }
    }
    parent.addEventListener(type, delegatedFunction, false);
}

function textKeydown(event) {
    if (isNaN(parseInt(event.key))) {
    //const szamok = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    //if (!szamok.includes(event.key)) {
        event.preventDefault();
    }
}
delegate(document, 'keydown', 'input.szam', textKeydown);