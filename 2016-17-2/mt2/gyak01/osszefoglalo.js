// Input-Output

console.log('Sziasztok!');
// alert('Sziasztok!');           // Böngésző funckció
// var x;                         // Függvény szintű változó létrehozása
let x;                            // Blokk szintű változó létrehozása
x = prompt('Adj meg egy számot'); // Böngésző funckció
console.log(x);

// Függvény létrehozása

// function kulcsszó + függvénynév + paraméterlista
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
// def sum(x):
//   s = 0
//   for a in x:
//     s += a
//   return s
function sum(x) {
    let s = 0;
    for (let a of x) {
        s += a;
    }
    return s;
}
  
// def max(x):
//   max = x[0]
//   for a in x:
//     if a > max:
//       max = a
//   return max
function max(x) {
    let max = x[0];
    for (let a of x) {
        if (a > max) {
            max = a;
        }
    }
    return max;
}
  
// def search(x, a):
//   p = -1
//   i = 0
//   while p == -1 and i < len(x):
//     if x[i] == a:
//       p = i
//     i += 1
//   return p
function search(x, a) {
    let p = -1;
    let i = 0;
    while (p === -1 && i < x.length) {
        if (x[i] == a) {
            p = i;
        }
        i += 1;
    }
    return p;
}

// Komplex adatszerkezetek
// Tömb: elemek (akár különböző típusú) listája (mint a Python lista)
let t = ['alma', 1, undefined, 42];

// Objektum: kulcs-érték párok
// A kulcs lehet string: ""
// Az érték bármi lehet (tömb és objektum is)
// Gyakori adatszerkezet: objektumok tömbje
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
let a = 1/0; // Infinity
typeof a; // number

let b = Math.asin(-10); // NaN
typeof b; // number

'10' + 10; // "1010"
10 + '10'; // "1010"
true + '10'; // "true10"
true + '10' + undefined; // "true10undefined"

parseFloat('10') + 10; // 20

typeof true + undefined; // trueundefined