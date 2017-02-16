// Input-Output

console.log('Sziasztok!');
// alert('Sziasztok!'); // Böngésző funckció
// var x; // Function-scope 
let x; // Block-scope
x = prompt('Adj meg egy számot'); // Böngésző funckció
console.log(x);

// Függvény létrehozása

function fakt(x) {
    let f = 1;
    for (let i = 1; i <= x; i++) {
        f *= i;
    }
    return f;
}

console.log(fakt(x));

// HTML kiírása document.write - tal

for (let i = 1; i <= 6; i++) {
    document.write('<h' + i + '>Hello világ!</h' + i + '>');
    document.write(`<h${i}>Hello világ!</h${i}>`);
}

// Programozási tétel tömbre

let t = ['alma', 1, undefined, 42];

function kereses(x) {
    let i = 0;
    while (i < x.length && x[i] !== true) {
        i++;
    }
    return i < x.length;
}

console.log(kereses(t));

// Komplex adatszerkezetek

let adat = {
    szerzo: 'J.R.R Tolkien',
    cim: 'A gyűrűk ura',
    kiadas: {
        ev: 1954,
        kiado: 'Allen & Unwin'
    },
    fordito: [
        'Réz Ádám',
        'Göncz Árpád',
        'Tandori Dezső'
    ]
};

console.log(adat['kiadás éve']);

// JavaScript nyelvi érdekességek
// number
// string
// boolean
// array
// object
// undefined
let a = 1/0;
typeof a;

let b = Math.asin(-10);
typeof b;

'10' + 10;
10 + '10';
true + '10';
true + '10' + undefined;

parseFloat('10') + 10;

typeof true + undefined;





