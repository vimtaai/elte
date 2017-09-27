// let elem = document.getElementById('input');
// elem = document.querySelector('form input[type=button]');
// elem = document.querySelectorAll('form input');
// console.log(elem);

// Segédfüggvények
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Állapot
let todok = [];

// Eseménykezelők
function todoHozzaad() {
    // Bemenet
    const szoveg = $('input[type=text]').value;
    if (szoveg === '') {
        console.log('Üres szöveg');
    } else {
        // Feldolgozás
        todok.push(szoveg);
    }
    // Megjelenítés
    console.log(todok);
    $('ul').innerHTML = genLista(todok);
    $('input[type=text]').value = '';
}

function enterLenyom(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        todoHozzaad();
    }
    console.log(event);
}

$('input[type=button]').addEventListener('click', todoHozzaad);
$('input[type=text]').addEventListener('keypress', enterLenyom);

// HTML generátorok
function genLista(todok) {
    // let html = '';
    // for (let todo of todok) {
    //     html += `<li>${todo}</li>`;
    // }
    // return html;
    //return todok.reduce((html, todo) => html + `<li>${todo}</li>`, '');
    return todok.map((todo) => `<li>${todo}</li>`).join('');
}