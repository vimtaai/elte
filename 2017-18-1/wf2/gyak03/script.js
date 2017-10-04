// let elem = document.getElementById('input');
// elem = document.querySelector('form input[type=button]');
// elem = document.querySelectorAll('form input');
// console.log(elem);

// Segédfüggvények
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
function delegate(parent, cSelector, eventType, eventHandler) {    
    function wrapper(event) {
        console.log(parent);
        let currentTarget = event.target;
        while (currentTarget != parent && 
               !currentTarget.matches(cSelector)) {
            currentTarget = currentTarget.parentNode;
            //console.log(currentTarget);
        }
        if (currentTarget != parent) {
            eventHandler.call(currentTarget, event);
        }
    }
    parent.addEventListener(eventType, wrapper);
}

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
        todok.push({
            szoveg: szoveg,
            allapot: "new"
        });
    }
    // Megjelenítés
    //console.log(todok);
    $('ul').innerHTML = genLista(todok);
    $('input[type=text]').value = '';
}

function enterLenyom(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        todoHozzaad();
    }
    //console.log(event);
}

function keszKattint(event) {
    console.log('keszKattint');
    let ind = this.parentNode.parentNode.getAttribute('id');
    ind = ind.substring(4);
    //console.log(this);
    //console.log('ind: ', ind);
    //console.log(event.target);
    todok[ind].allapot = "ready";
    $('ul').innerHTML = genLista(todok);
}

function torlesKattint(event) {
    console.log('torlesKattint');
    let ind = this.parentNode.parentNode.getAttribute('id');
    ind = ind.substring(4);
    todok[ind].allapot = "deleted";
    $('ul').innerHTML = genLista(todok);
}

$('input[type=button]').addEventListener('click', todoHozzaad);
$('input[type=text]').addEventListener('keypress', enterLenyom);
//$('ul').addEventListener('click', keszKattint);
delegate($('ul'), 'button.green', 'click', keszKattint);
delegate($('ul'), 'button.red', 'click', torlesKattint);

// HTML generátorok
function genLista(todok) {
    return todok.map((todo, ind) => genTodo(todo, ind)).join('');
}

function genTodo(todo, ind) {
    return `
        <li class="${todo.allapot}" id="todo${ind}">
            <span class="todo">${todo.szoveg}</span>
            <span class="right">
                <button class="green">Kész</button>
                <button class="red">Törlés</button>
            </span>
        </li>
    `;
}