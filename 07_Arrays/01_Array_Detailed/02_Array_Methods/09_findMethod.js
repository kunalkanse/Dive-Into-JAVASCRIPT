
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// as the name suggest we can use find() method to retrieve one 
// element of array based on a condition specified

// find() method also accepts callback function.
// which will be called as the method starts loop over the array.
 
// find() returns the first element of array which will satisfy the condition

// find() is similar to filter() but the major diffrence is
// find() returns only single element what fulfill condition 
// whereas filter() returns all the elements of array

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300]; 

const firstWithdrawl = transactions.find(amt => amt < 0);
console.log(firstWithdrawl);    // -400 

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// find details of specific user from bank API => 

// array of accounts
const accounts = [
    {
        owner: 'Jonas Schmedtmann',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,
    },

    {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
    },

    {
        owner: 'Steven Thomas Williams',
        movements: [200, -200, 340, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
    },

    {
        owner: 'Sarah Smith',
        movements: [430, 1000, 700, 50, 90],
        interestRate: 1,
        pin: 4444,
    }
]



//////////////////////////////////////////////////////////////////
console.log();

const account = accounts.find(acc => acc.owner === 'Steven Thomas Williams');

console.log(account);

/*
{
  owner: 'Steven Thomas Williams',
  movements: [
     200,  450, -400,
    3000, -650, -130,
      70, 1300
  ],
  interestRate: 1.2,
  pin: 1111
}
*/

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Without Using find()

console.log();

for (let account of accounts) {
    if (account.owner === 'Steven Thomas Williams') {
        console.log(account);
    }
}
