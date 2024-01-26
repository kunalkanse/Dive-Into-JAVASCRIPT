
const bills = [20, 265, 176, 440, 37, 105, 10, 1100, 46, 52];

let tips = [];
let total = [];

function calcTip(bill) {
    return bill >= 50 && bill <= 350 ? bill * 0.15 : bill * 0.2;
}

for (let index = 0; index < bills.length; index++) {
    const tip = calcTip(bills[index]);
    tips.push(tip);
    total.push(bills[index] + tips[index]); // [ 24, 304.75,  202.4, 528,   44.4, 120.75, 12,   1320,   55.2,59.8]
}

console.log(bills); // [20, 265, 176,  440,37, 105,  10, 1100,46,  52]
console.log(tips);   // [ 4, 39.75, 26.4, 88, 7.4, 15.75, 2, 220, 9.200000000000001, 7.8 ]
console.log(total); // // [ 24, 304.75,  202.4, 528,   44.4, 120.75, 12,   1320,   55.2,59.8]

/////////////////////////////////////////////////
console.log();
/////////////////////////////////////////////////

const arr = [10, 20, 30, 40, 50];

const calcAverage = (arr) => {
    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }

    return sum / arr.length;
}

const sum = calcAverage(arr);
console.log(`sum : ${sum}`);    // sum : 30

///////////////////////////////////////////////////////////
