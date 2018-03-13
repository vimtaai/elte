function $(s) {
    return document.querySelector(s);
}

function mouseMove(event) {
    event.preventDefault();
    //console.log(event);
    const div = $('div');
    // így nem lehet lekérdezni CSS stílust
    // const width = div.style.width;
    // const height = div.style.height;
    const width = parseInt(getComputedStyle(div).width);
    const height = parseInt(getComputedStyle(div).height);
    const x = event.clientX - width / 2;
    const y = event.clientY - height / 2;
    div.style.top = y + 'px';
    div.style.left = x + 'px';
}
$('div').addEventListener('drag', mouseMove);

function dragOver(event) {
    event.preventDefault();
}
window.addEventListener('dragover', dragOver);