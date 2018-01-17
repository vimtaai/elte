function $(id) {
    return document.getElementById(id);
}

function moveEvent(event) {
    console.log(event);
    $('screenX').innerHTML = event.screenX;
    $('screenY').innerHTML = event.screenY;
    $('clientX').innerHTML = event.clientX;
    $('clientY').innerHTML = event.clientY;
}

function init() {
    window.addEventListener('mousemove',
                            moveEvent);
}

window.addEventListener('load', init);