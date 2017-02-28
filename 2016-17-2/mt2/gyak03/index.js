// SEGÉDFÜGGVÉNYEK

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// ESEMÉNYKEZELŐK
function keyupEditor(event) {
    console.log(event);
    if (event.ctrlKey && event.keyCode === 13) {
        event.preventDefault();
        let text = $('#_editor').value; // beolvasás
        $('#_output').innerHTML = TextOutput(text); // kiírás
    }
}
$('#_editor').addEventListener('keyup', keyupEditor, false);

// "Másolásvédelem"
function rightClickHTML(event) {
    event.preventDefault();
}
$('html').addEventListener('contextmenu', rightClickHTML, false);

function keydownHTML(event) {
    if (event.ctrlKey && (event.keyCode === 67 || event.keyCode === 86)) {
        event.preventDefault();
    }
}
$('#_editor').addEventListener('keydown', keydownHTML, false);

// HTML GENERÁTOROK
function TextOutput(markdown) {
    return marked(markdown);
} 