
////////////////////////////////////////////////////////////////////////
// reduce() method reduces all array elements down to one single value
// e.g. Adding all array elements

// as reduce() loop over the array it keepd adding the current element into accumulator unitl at the end of the loop    

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

let arr = [1, 2, 3, 4, 5];

let value = arr.reduce((acc, current) => {
    return current + acc;
}, 10);

console.log(value);

console.log();
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

const availableBalance = transactions.reduce((accumulator, currentValue, i, arr) => {
    console.log(accumulator);   // 100 200 650 250 3250 2600 2470 2540
    return accumulator + currentValue;
}, 100);

// const availableBalance = transactions.reduce((acc, curr) => acc + curr);

console.log(`using REDUCE Available Balance is : ${availableBalance}`);  // Available Balance is : 3940

console.log();
//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// without using reduce

let availableBalance2 = 0;

for (let amt of transactions) {
    availableBalance2 += amt;
}

console.log(`Using FOR Available Balance is : ${availableBalance2}`)

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// const max = Math.max(...transactions);
// console.log(max);   // 3000

console.log();
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// find the maximum amount from trasactions
const max = transactions.reduce((acc, curr) => {
    return acc = (curr > acc ? curr : acc);
}, transactions[0])

console.log(max);   // 3000