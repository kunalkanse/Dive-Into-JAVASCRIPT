
/////////////////////////////////////////////////////////////////
// flat() & flatmap()

// flat() method is used ti flatten the nested array. n default
// it can flatten to 1 level, nut we can specify the no. of levels
// or can specify Infinity as keyword

// flatMap() is combination of flat() and map(), which accept 
//callBack function like map() and flatten array only single level
// flatMap() perform task of map() & flat() alone.
//////////////////////////////////////////////////////////////////

// suppose we have a nested array and we want to flatten array it.
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());    // [1, 2, 3, 4,5, 6, 7, 8]

//////////////////////////////////////////////////////////////////
// what if we have deep nested array

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());    // [ [ 1, 2 ], 3, 4, [ 5, 6 ], 7, 8 ]

// flat() method able to flat only 1 level nested array

//////////////////////////////////////////////////////////////////
// to make deep level flat then we need to pass argument as 
//number which will be considred as levels or we can pass 
//infinity as argument

console.log(arrDeep.flat(2));    // [1, 2, 3, 4,5, 6, 7, 8]
console.log(arrDeep.flat(Infinity));    // [1, 2, 3, 4,5, 6, 7, 8]

console.log();
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// REAL TIME EXAMPLE

// BANK USERS
const account1 = {
    owner: 'Jonas Schmedtmann',
    transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    transactions: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    transactions: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];



const allTransactions = accounts.map(acc => acc.transactions);
console.log(allTransactions);
/*
    [
        [200,  450, -400,3000, -650, -130,70, 1300],
        [5000,  3400,  -150,-790, -3210, -1000,8500,   -30],
        [ 200, -200, 340,-300,  -20,  50, 400, -460],
        [ 430, 1000, 700, 50, 90 ]
    ]
*/

console.log(allTransactions.flat(Infinity));
/*
[
   200,  450,  -400,  3000, -650,
  -130,   70,  1300,  5000, 3400,
  -150, -790, -3210, -1000, 8500,
   -30,  200,  -200,   340, -300,
   -20,   50,   400,  -460,  430,
  1000,  700,    50,    90
]
*/


const overAllAmount = allTransactions.flat().reduce((add, next) => add + next, 0);
console.log(overAllAmount); // 17840

console.log();
/////////////////////////////////////////////////////////////////
// method chaining
console.log(
    accounts
        .map(acc => acc.transactions)
        .flat(Infinity)
        .reduce((add, next) => add + next, 0)); // 17840

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// USING flatMap()

console.log(
    accounts
        .flatMap(acc => acc.transactions)
        .reduce((add, next) => add + next, 0)); // 17840
