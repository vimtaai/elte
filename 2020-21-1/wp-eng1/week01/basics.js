// Writing to the console
console.log("Hello world");

const name = "Márton";
console.log("Hello " + name);

// undefined (type, value)
const u = undefined;
console.log(u, typeof u);
let u2;
console.log(u2, typeof u2);

// boolean (type)
const b = true;
const b2 = false;

// number (type)
const n = 42.13;
console.log(n, typeof n);
const i = 1 / 0;
console.log(i, typeof i);

console.log(1 / 0); // -> Infinity
console.log(1 / -0); // -> -Infinity
console.log(-0 === 0); // -> true
console.log(0 / 0); // -> NaN (not a number)

console.log(typeof NaN === "number");
console.log(NaN === NaN); // -> false

// strings (type)
const s = "string";
const s2 = "string ${s}";
const s3 = `string ${s}`;
console.log(s2);
console.log(s3);
console.log(s3.length);
