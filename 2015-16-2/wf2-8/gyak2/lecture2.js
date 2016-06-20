"use strict";

// Segedfuggvenyek
function $(s) {
    return document.querySelector(s);
}
// ---

// 1. feladat
var input = $("#num");
var button = $("#button");
var output = $("#output");

function text(n) {
    var result = "";
    
    // backtick = AltGr + 7
    for (var i = 1; i <= n; ++i) {
        // result += "<span style=\"font-size: " + 20 * i + "px\">Helló Világ!</span>"; 
        result += `<span style="font-size: ${20 * i}px">Helló Világ!</span>`; 
    }
    
    return result;
}

function onClick() {
    var n = parseInt(input.value);
    
    output.innerHTML = text(n);
}

button.addEventListener("click", onClick, false);
// ---

// 2. feladat
var input2 = $("#num2");
var button2 = $("#button2");
var output2 = $("#output2");

function kerulet(r) {
    return `K = 2 * r * PI = ${2 * r * Math.PI}`;
}

function onClick2() {
    var r = parseInt(input2.value);
    
    output2.innerHTML = kerulet(r);
}

button2.addEventListener("click", onClick2, false);
// ---

// 3. feladat
var input3 = $("#text3");
var input4 = $("#text4");
var button3 = $("#button3");

function masol(i1, i2) {
    i2.value = i1.value;
}

function onClick3() {
    masol(input3, input4);
}

button3.addEventListener("click", onClick3, false);
// ---
