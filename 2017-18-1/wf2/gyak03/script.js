// Segédfüggvények
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
function delegate(pSelector, cSelector, eventType, eventHandler) {    
    const parent = $(pSelector);
    function wrapper(event) {
        let currentTarget = event.target;
        while (currentTarget != parent && 
               !currentTarget.matches(cSelector)) {
            currentTarget = currentTarget.parentNode;
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
    $('ul').innerHTML = genLista(todok);
    $('input[type=text]').value = '';
}

function enterLenyom(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        todoHozzaad();
    }
}

function keszKattint(event) {
    // A probléma az volt, hogy az egyik eseménykezelő újragenerálta a listát
    // és a másik már egy nem létező, virtuális listaelemmel dolgozott, aminek valóban 
    // nem volt már szülője.
    event.stopImmediatePropagation(); // Ez megakadályozza, hogy ha az egyik eseménykezetlő legfut, akkor a másik meghívódjon
    let ind = this.parentNode.parentNode.getAttribute('id');
    ind = ind.substring(4);
    todok[ind].allapot = "ready";
    $('ul').innerHTML = genLista(todok);
}

function torlesKattint(event) {
    //console.log('torlesKattint called');
    event.stopImmediatePropagation();
    let ind = this.parentNode.parentNode.getAttribute('id');
    ind = ind.substring(4);
    todok[ind].allapot = "deleted";
    $('ul').innerHTML = genLista(todok);
}

$('input[type=button]').addEventListener('click', todoHozzaad);
$('input[type=text]').addEventListener('keypress', enterLenyom);
//$('ul').addEventListener('click', keszKattint);
delegate('ul', 'button.green', 'click', keszKattint);
delegate('ul', 'button.red', 'click', torlesKattint);

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