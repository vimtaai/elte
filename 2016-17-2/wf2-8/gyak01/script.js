// Input-Output
//let nev = prompt('Ki vagy?');
//console.log('Hello, ' + nev + '!');
//console.log("Hello, ", nev, "!");
//console.log(`Hello, ${nev}!`);

// Vezérlési szerkezetek
for (let i = 1; i <= 6; i++) {
    if (i % 2 == 0) {
        document.write(`<h${i}>Hello</h${i}>`);
    }
}

// Függvények, programozási tételek
let x = [42, 'alma', undefined, true, 4.3];

function search(t) {
    let i;
    for (i = 0; i < t.length && t[i] !== true; i++);
    return i < t.length ? i : undefined;
}

console.log(search(x));

function search2(t, T) {
    let i;
    for (i = 0; i < t.length && !T(t[i]); i++);
    return i < t.length ? i : undefined;
}

console.log(search2(x, function (a) {
    return a === true;
}));
console.log(search2(x, a => a === true));

// number
// string
// boolean
// array
// object
// function
// undefined

// Adatszerezetek
let konyv = {
    szerzo: 'J.R.R. Tolkien',
    cim: 'A gyűrűk ura',
    'kiadás éve': 1954,
    kiado: 'Allen & Unwin',
    fordito: [
        'Réz Ádám',
        'Göncz Árpád',
        'Tandori Dezső'
    ]
};

console.log(konyv.szerzo);
console.log(konyv['szerzo']);
console.log(konyv['kiadás éve']);

// Nyelvi érdekességek

'12' == 12;

typeof (1/0);
typeof NaN;
"alma"/2;
Math.asin(-10);

typeof true + undefined;
(typeof true) + undefined;

'10' + 20;
10 + '20';

//typeof prompt()

let a, b;
//a = parseInt(prompt());
//b = parseInt(prompt());
//alert(a + b);