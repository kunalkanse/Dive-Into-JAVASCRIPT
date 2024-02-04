
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

console.log(Math.sqrt(25));    // 5
console.log(25 ** (1 / 2)); // 5
console.log(27 ** (1 / 3)); // 3

console.log(Math.max(45, 31, 65, 101, 6, 99, 45));  // 101
console.log(Math.min(45, 31, 65, 101, 12, 99, 45));  // 6

// console.log(Math.pi * Numbers.parseFloat('2.5rem'));

console.log(Math.random() * 6 + 1);
console.log(Math.trunc(94.2365));   // 94
console.log(Math.trunc(Math.random() * 6 + 1));

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

const randomBetween = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomBetween(10, 20)); // always return numbers between range

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Following al methods perform automatic type coersion
console.log(Math.round(45.2));  // 45
console.log(Math.round(45.7));  // 46

console.log(Math.ceil(23.3));   // 24
console.log(Math.ceil('23.8'));   // 24

console.log(Math.floor(12.2));  // 12
console.log(Math.floor(12.7));  // 12

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

console.log(2.7.toFixed(0));    // 3 (String)
console.log(2.7.toFixed(3));    // 2.700    (String)
console.log(2.732.toFixed(2));  // 2.73 // (String)
console.log(+(2.653.toFixed(2)));   // 2.65 (Number)

