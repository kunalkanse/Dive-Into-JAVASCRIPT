
/////////////////////////////////////////////////////////////////////////
// filter() is used as filter on elements of array which satisfy a certain
// condtion
// So, all the elements which pass the test we specified will add it into
// a new filtered array
// element for which the condition is true that will included into new array

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

let arr = [6, 8, 4, 3, 2, 9, 1, 8, 3, 7];

let newArr = arr.filter((elem) => {
    if (elem % 2 == 0) return elem;
});

console.log(newArr);    // [ 6, 8, 4, 2, 6, 8 ]

console.log();
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

// created callBack function inside filter
const depositAmt = transactions.filter(function (trxn) {
    return trxn > 0;
});

const withdrawl = (trxn) => trxn < 0;

// calling callback function in filter
const withdrawlAmt = transactions.filter(withdrawl);

console.log(transactions);  // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(depositAmt);   // [ 200, 450, 3000, 70, 1300 ]
console.log(withdrawlAmt);  // [ -400, -650, -130 ]