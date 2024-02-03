
// Numbers are stored in 64 bits means we can store 64 0's & 1's
// From 64 only 53 are used rest are used for decimal point & the sign
// so if only 53 are used then there is an limit on 
// how bug number should be stored

console.log(2 ** 53 - 1);   // 9007199254740991
// This is the numbers till the js can store safely
// sometimes we can store bigger number than this but 
// it become tricky internally

console.log(2 ** 53 + 1);   // 9007199254740992
console.log(2 ** 53 + 2);   // 9007199254740994
console.log(2 ** 53 + 3);   // 9007199254740996
console.log(2 ** 53 + 4);   // 9007199254740996
console.log(2 ** 53 + 5);   // 9007199254740996

// So if sometimes we might need really really big number
// such as database IDs, from APIs so there was no way to store these values till 2020
// now new primitive datatype is added as BigInt.

console.log(typeof 546546464644644464876464643136541313n);  // bigint
console.log(BigInt(9874563126459876451326));    // This doesnt work properly
// 98745631264598769883152384n

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
console.log();

console.log(10000n + 132564n);  // 142564n

/////////////////////////////////////////////////////////////////////////////////

const big = 4646523131654n;
const num = 12;

// console.log(big * num); // TypeError: Cannot mix BigInt and other types, use explicit conversions    
console.log(big * BigInt(num)); // 55758277579848n

/////////////////////////////////////////////////////////////////////////////////
// Exceptions
console.log(20n > 15);  // true
console.log(20n == 20); // true
console.log(20n === 20);    // false

console.log(10n / 3n);  // 3n
console.log(10 / 3);    // 3.33333333333335

////////////////////////////////////////////////////////////////////////////////

// console.log(Math.sqrt(25n));    // TypeError: Cannot convert a BigInt value to a number
