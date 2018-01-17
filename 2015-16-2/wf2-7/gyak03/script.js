"use strict";

/////////////////
// Segédfüggvények

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function childOf(c,p){while((c=c.parentNode)&&c!==p);return !!c}

/////////////////
// Eseménykezelők

$('img').addEventListener('click', clickHandler);
$('a').addEventListener('click', clickHandler);
function clickHandler(event) {
    event.preventDefault();
    if (event.altKey) {
        console.log('esemény');
    }
    console.log(event);
    //window.location = 
    //    event.target.getAttribute('href');
}

//$('img').addEventListener('mousemove', eventHandler);
$('img').addEventListener('contextmenu', eventHandler);
function eventHandler(event) {
    event.preventDefault();
    /*var ctxmenu = document.createElement('DIV');
    ctxmenu.style.width = "100px";
    ctxmenu.style.height = "200px";
    ctxmenu.style.background = "red";
    ctxmenu.style.position = "fixed";
    ctxmenu.style.top = event.pageY + "px";
    ctxmenu.style.left = event.pageX + "px";
    document.body.appendChild(ctxmenu);*/
    var ctxmenu = $('#ctxmenu');
    ctxmenu.style.top = event.pageY + "px";
    ctxmenu.style.left = event.pageX + "px";
    ctxmenu.style.display = "block";
    console.log(event);
}


$('body').addEventListener('click', hideCtxHandler);
function hideCtxHandler(event) {
    //console.log(event.target);
    var ctxmenu = $('#ctxmenu');
    if (event.target !== ctxmenu && 
        !childOf(event.target, ctxmenu)) {
        ctxmenu.style.display = "none";
    }
}

//var links = $$('a');
//for (var i = 0; i < links.length; ++i) {
    // links[i].addEventListener('click', elteLinkHandler);
// }
// function elteLinkHandler(event) {
//     if (event.target.href.indexOf('elte.hu') == -1) {
//         event.preventDefault();
//     }
// }

$('body').addEventListener('click', elteLinkHandler);
function elteLinkHandler(event) {
    if (event.target.tagName == 'A') {
        console.log('link kattintva');
        if (event.target.href.indexOf('elte.hu') == -1) {
            event.preventDefault();
        }
    }
}