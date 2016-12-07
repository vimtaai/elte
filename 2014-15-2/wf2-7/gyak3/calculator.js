function $(id) {
    return document.getElementById(id);
}

function clickEvent(event) {
    $('screen').innerHTML += event.target.innerHTML;
}

function init() {
    for (var i = 0; i <= 9; ++i) {
        $('button_' + i).addEventListener('click', clickEvent);
    }
}

window.addEventListener('load', init);
