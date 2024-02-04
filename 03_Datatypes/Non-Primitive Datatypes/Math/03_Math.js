const score = 400;

const balance = new Number(100);
console.log(score);
console.log(balance);

console.log(typeof balance.toString()); //String
console.log(balance.toString().length); // 3

console.log(balance.toFixed(2 ));   // 100.00
console.log(typeof balance);

const otherNumber = 1123.586;

console.log(otherNumber.toPrecision(3));

// +++++++++++++++****************+++++++++++++++

console.log('\n');

console.log(Math);

console.log(Math.random());     //0.1 - 0.9
console.log(Math.random()*10);  // 0.6*10 = 6.654
console.log(Math.abs(-40));     //40
console.log(Math.round(4.4));   //4 
console.log(Math.ceil(4.2));    //5
console.log(Math.floor(4.9));   //4
console.log(Math.sqrt(25));     //5
console.log(Math.min(4,3,5,6)); //3
console.log(Math.max(4,3,5,6)); //6
console.log();
console.log(Math.floor((Math.random()*10) + 1));
