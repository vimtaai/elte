"use strict";

console.log('mukodik');

//console.log(document.body);
/*Komment*/

document.body.innerHTML
    = "Hello vilag";
    
    


function ciklus(x) { 
    for (var a = 0; a < x; a++) {
        console.log(a);
    }
}

var a = 5;

//ciklus(10);

if (a == 5) {
    //console.error('túl kevés az a!!!');
}

var tomb = [1,2,"a"];
tomb[10] = "alma";
console.log(tomb);

for (var index = 0; index < tomb.length; index++) {
   console.log(tomb[index]);
}

var obj = {
    alma: 'almakorte',
    korte: 'almafa',
    narancs: 1
};

var adat = [
    {
        szin: 'feher',
        tipus: 'gyalog',
        koord: ['A', 4]
    },
    {
        szin: 'fekete',
        tipus: 'gyalog',
        koord: ['A', 6]
    }
];

//console.log(tomb);
//console.log(tomb.length);

//console.log(tomb);
//console.log(tomb.length);
//console.log(tomb[100]);
//console.log(tomb.length);



