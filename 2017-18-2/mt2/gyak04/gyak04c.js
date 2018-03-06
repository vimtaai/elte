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

function linkClick(event) {
    const a = event.delegatedTarget;
    if (a.href.indexOf('elte.hu') === -1) {
        event.preventDefault();
    }
}
delegate(document, 'click', 'a', linkClick);