
/////////////////////////////////////////////////////////////////////////
// map() method is another method that we can use to loop over the array.
// map() is similar to forEach just difference is that map() returns
// new array based on original array

// map() accepts an array loop over that array and in each iteration it
// applies the callback function code on the every element of original array, and 
// returns new array containing the results of applying on 
// opration on all original array elements.

// we can say that it maps the original array into new array

// forEach() method allow us to do some work by using element. but map()
// allows to perform modification on array elements. 


//////////////////////////////////////////////////////////////////////////
const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];
//////////////////////////////////////////////////////////////////////////

const rsToUsd = 83.12;

const transactionsUSD = transactions.map((trxns, trxn_ID, arr) => {
    return trxns * rsToUsd;
});

console.log(transactionsUSD);

/*
[
  16624,  37404,  -33248,  249360,  -54028,  -10805.6,5818.400000000001,108056]
*/

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// creating seperate callBack function & calling it from map() for each transaction

const convertor = (trxn) => trxn * rsToUsd;
const txns3USD = transactions.map(convertor)
console.log(txns3USD);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// Withut using map() we can do it using looping

const txns2USD = [];

for (let txn of transactions) {
    txns2USD.push(txn * rsToUsd);
}

console.log(txns2USD);

/*
[
  16624,  37404,  -33248,  249360,  -54028,  -10805.6,5818.400000000001,108056]
*/

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// same as forEach() funtion map() also have 3 paramaeters
// array.map(Element, Index, WholeArray);

const trxnsDetails1 = transactions.map((amt, trxn_ID, statement) => {
    return `trxn_ID ${trxn_ID + 1} : ${amt > 0 ? 'DEPOSITED' : 'WITHDRAWL'} ${amt} RS`;
});

console.log(trxnsDetails1);
/*
[
  '1) DEPOSITED 200 RS',
  '2) DEPOSITED 450 RS',
  '3) WITHDRAWL -400 RS',
  '4) DEPOSITED 3000 RS',
  '5) WITHDRAWL -650 RS',
  '6) WITHDRAWL -130 RS',
  '7) DEPOSITED 70 RS',
  '8) DEPOSITED 1300 RS'
]
*/

/////////////////////////////////////////////////////////////////////////

transactions.forEach((amt, trxn_ID, statement) => {
    console.log(`trxn_ID ${trxn_ID + 1} : ${amt > 0 ? 'DEPOSITED' : 'WITHDRAWL'} ${amt} RS`);
});

/*
    1) DEPOSITED 200 RS
    2) DEPOSITED 450 RS
    3) WITHDRAWL -400 RS
    4) DEPOSITED 3000 RS
    5) WITHDRAWL -650 RS
    6) WITHDRAWL -130 RS
    7) DEPOSITED 70 RS
    8) DEPOSITED 1300 RS
*/

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// creating userName form Owner Name by taking first letter of each word. 

const user = "Steven Thomas Williams";

const createUserName = (user) => {

    const userName = user
        .toLowerCase()
        .split(" ")
        .map((name) => name.charAt(0))
        .join('');

    return userName
}

const userName = createUserName(user)

console.log();
console.log(userName); // stw
