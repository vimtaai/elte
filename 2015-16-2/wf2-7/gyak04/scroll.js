// Segédfüggvények

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

// Adatok

var prevY = window.scrollY;
var isScrolled = false;

// Eseménykezelők

$('button').addEventListener('click', 
                             clickHandler);
window.addEventListener('wheel', stopScroll);
window.addEventListener('keydown', keyHandler);
window.addEventListener('keypress', keyHandler);

function keyHandler(event) {
    //if (event.keyCode == 'a'.charCodeAt(0)) {
    if (event.code == 'KeyS') {
        isScrolled = true;
    }
}
function stopScroll(event) {
    isScrolled = true;
    console.log(event);
}
function scroll() {
    prevY = window.scrollY;
    window.scrollBy(0, 15);
    console.log(Date.now());
    console.log(window.scrollY);
    if (window.scrollY != prevY && !isScrolled) {
        setTimeout(scroll, 100);
    }
}
                          
function clickHandler() {
    isScrolled = false;
    scroll();
}