const inventory = [
  { id: "001-SM", name: "surgical mask", amountInStore: 145, amountInStorage: 12432, },
  { id: "002-FFP3", name: "FFP3 facemask", amountInStore: 142, amountInStorage: 50, },
  { id: "003-HS200", name: "Hand sanitizer (200ml)", amountInStore: 2, amountInStorage: 242, },
  { id: "004-HS1000", name: "Hand sanitizer (1000ml)", amountInStore: 150, amountInStorage: 0, },
];

// What items do I have to order from my supplier
// I have to order if...
// There is less than 100 items in storage,
// or
// There is less than 200 item total.

// Functional
const isNewOrderNeeded = (item) =>
  item.amountInStorage < 100 || item.amountInStorage + item.amountInStore < 200;
const itemsToOrder = inventory.filter(isNewOrderNeeded).map((item) => item.name);
console.log(itemsToOrder);

// Structured / Imperative
function isNewOrderNeeded2(item) {
  return item.amountInStorage < 100 || item.amountInStorage + item.amountInStore < 200;
}

const itemsToOrder2 = [];
for (let i = 0; i < inventory.length; i++) {
  if (isNewOrderNeeded2(inventory[i])) {
    itemsToOrder2.push(inventory[i].name);
  }
}

console.log(itemsToOrder2);
