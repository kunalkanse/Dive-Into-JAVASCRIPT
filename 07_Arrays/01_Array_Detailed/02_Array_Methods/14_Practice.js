
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

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const allDeposites = accounts
    .flatMap(acc => acc.transactions)
    .filter(elem => elem > 0)
    .reduce((sum, next) => sum + next, 0);

console.log(allDeposites);  // 25180
/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// count of all deposites greater than 1000

// const deposites1000 = accounts
//     .flatMap(acc => acc.transactions)
//     .filter(elem => elem > 1000).length

const deposites1000 = accounts
    .flatMap(acc => acc.transactions)
    .filter(elem => elem > 1000)
    .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0)

console.log(deposites1000); // 5

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// CONVERT : 
// this is a nice title => This Is a Nice Title

const str = 'this is a nice title';

const newStr = str
    .split(' ')
    .map(s => s.length > 1 ? s.charAt(0).toUpperCase() + s.slice(1) : s)
    .join(' ');

console.log(newStr);