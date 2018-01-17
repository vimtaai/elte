"use strict";

console.log("Hello world");
document.body.innerHTML = 
    "<h1>Hello world</h1>";

var a = 'alma';
console.log(a);

console.log('Hello' + a + '!');
console.log(`Hello ${a}!`);

if (a == 'alma') {
    console.log('Alma vagyok');
} else {
    console.log('Nem vagyok alma');
}

for (var i = 1; i < 10; i++) {
    console.log(i*i);
}

var j = 1;
while (j < 10) {
    console.log(j*j*j);
    j++;
}

function negyzet(x) {
    return x*x;
}

var tomb = [1, 2, 3, 'a'];
tomb.push(4);
for (var i = 0; i < tomb.length; i++) {
    document.body.innerHTML += negyzet(tomb[i]);
}

console.log(1/0);
console.log(Math.sqrt(-1));

var objektum = {
  elso: 1,
  masodik: 2,
  harmadik: 3,
  valamibetu: 'a'  
};

objektum.otodik = 5;

console.log(objektum.masodik);

var babuk = [
    {
        szin: 'feher',
        tipus: 'gyalog',
        koord: ['A', 5]
    },
    {
        szin: 'feher',
        tipus: 'gyalog',
        koord: ['B', 5]
    },
    {
        szin: 'fekete',
        tipus: 'gyalog',
        koord: ['B', 6]
    }
];
