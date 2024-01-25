
const bills = [125, 555, 44];

// Arrow Function
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]]

console.log(bills);
console.log(tip);
console.log(total); // [ 143.75, 666, 52.8 ]


