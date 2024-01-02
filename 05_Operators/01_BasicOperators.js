////////////////////////////////////
// Basic Operators
// Math operators
const now = 2023;
const ageKunal = now - 2001;
const ageAniket = now - 1996;
console.log(ageKunal, ageAniket);

console.log(ageKunal * 2, ageKunal / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// concatenation
const firstName = 'Kunal';
const lastName = 'Kanse';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageKunal > ageAniket); // >, <, >=, <=
console.log(ageAniket >= 18);

const isFullAge = ageAniket >= 18;

console.log(now - 1991 > now - 2018);
