console.log("Hello world");

// types

// booleans
true;
false;
// numbers
console.log(typeof(4241e-2));
// undefined
console.log(typeof(undefined));
let a;
console.log(a === undefined);
function foo(a, b) {
    console.log(a, b);
}
foo("apple");

// strings
console.log(typeof("apple"));
let apple = "apple";
console.log(apple.length);
console.log(apple.toUpperCase());
console.log('a'.length);
console.log("apple" + "pears");
let pears = "pears";
console.log(`${3+2} ${apple}
${pears}`);

// objects
console.log(typeof({}));
// {} === empty object
let o = {
    a: 42,
    b: true,
    foo: {
        bar: 42
    }
};
// object literal
o.apple = Math.PI;
console.log(o.apple);
console.log(typeof(null));

function nameObject(fullname) {
    let parts = fullname.split(" ");

    if (parts.length !== 2) {
        return null;
    }

    let firstName = parts[0];
    let lastName = parts[1];

    return {
        firstName: firstName,
        lastName: lastName
    }
}

function q() { console.log("a"); }
//const q = function () { console.log("a"); }
console.log(typeof(q));

let o2 = {
    foo: "apples",
    // bar() { console.log(this.foo);}
    bar: function () {console.log(this.foo);}
}
o2.bar();

// fat arrow syntax (lambdas)
const add = (a, b) => a + b;
// add = \(a,b) -> a + b

// arrays
let arr = [42, true, "apples", []];
console.log(arr.length);
console.log(arr[10]);
arr[10] = 10;
console.log(arr.length);
console.log(typeof(arr));

let minesweeper = [
    [
        { isMine: true, isRevealed: false },
        { isMine: false, isRevealed: false }
    ],
    [
        { isMine: true, isRevealed: true },
        { isMine: false, isRevealed: true }
    ]
];

function isWin(minesweeper) {
    for (let i = 0; i < minesweeper.length; i++) {
        for (let j = 0; j < minesweeper[i].length; j++) {
            if (!minesweeper[i][j].isMine && !minesweeper[i][j].isRevealed) {
                return false;
            }
        }
    }
    return true;
}

const isWin = (rows) => 
    rows.every((row) => 
        row.every((field) => field.isMine || field.isRevealed)); 

