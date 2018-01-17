"use strict";

// Segédfüggvények
function $(s) {
    return document.querySelector(s);
}

// Állapottér
var _list = [];

function getList() {
    return _list;
}

// Példa: task = { name: "buy milk", done: false }
function addTask(task) {
    _list.push({
        name: task,
        done: false
    });
}

function markTask(i) {
    _list[i].done = !_list[i].done;
}

// Kimenet generálás
function genTask(task) {
    if (task.done) {
        return `<li><s>${task.name}</s></li>`;
    }
    else {
        return `<li>${task.name}</li>`;
    }
}

function genTasks(tasks) {
    var result = "";
    
    for (var task of tasks) {
        result += genTask(task);
    }
    return result;
}

var output = $("#output");

// Eseménykezelés
var add = $("#add");
var task = $("#task");

add.addEventListener("click", function () {
    if (task.value.length > 0) {
        addTask(task.value);

        output.innerHTML = genTasks(getList());
    }
}, false);

output.addEventListener("click", function (event) {
    var target = event.target;
    
    if (target.tagName === "S") {
        target = target.parentNode;
    }
    
    for (var i = 0; i < this.children.length; ++i) {
        if (this.children[i] == target) {
            break;
        }
    }
    
    markTask(i);
    
    output.innerHTML = genTasks(getList());
}, false);

task.addEventListener("keydown", function (event) {
    if (event.which === 13) {
        add.click();
    }
    
    // Opcionális
    /*var forbiddenKeys = [192, 191, 187, 219, 221, 186, 222, 220];
    
    if (forbiddenKeys.indexOf(event.which) !== -1) {
        event.preventDefault();
    }*/
}, false);
