

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// IN javascript all numbers are represneted as Floating point.
// Basically always as decimals

console.log(28 === 28.0);   // true

// That is why all numbers types having same Datatype as Number
// numbers are stored in the form of binary format, In 1 and 0 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// conversion
console.log(Number('56'));
console.log(+'56');

// parsing
console.log(Numbers.parseInt('30px'));  // 30
console.log(Number.parseFloat('2.5rem'));   // 2.5
console.log(Numbers.parseFloat('e45'));   // NAN (must start with number)

// This is usefull when we manipulate css values
