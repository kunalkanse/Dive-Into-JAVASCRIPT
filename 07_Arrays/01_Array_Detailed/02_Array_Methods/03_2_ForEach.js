
// Example 1)
const transactions = [5000, -2570, 540, -805, -150, 625, 750, -320];

transactions.forEach(function (amt, i) {
    const type = amt > 0 ? 'Deposit' : 'Withdrawl';
    const details = `${i + 1} ${type} : ${amt}`
    console.log(details);
});

/*

1 Deposit : 5000
2 Withdrawl : -2570
3 Deposit : 540
4 Withdrawl : -805
5 Withdrawl : -150
6 Deposit : 625
7 Deposit : 750
8 Withdrawl : -320

*/

//////////////////////////////////////////////////////////
console.log('\n');
/////////////////////////////////////////////////////////

// Example 2)

const dogsAge = [3, 5, 2, 8, 9, 1, 2, 4, 6, 7]
const correctedDogs = dogsAge.slice(1, dogsAge.length - 2);
console.log(correctedDogs);  // [5, 2, 8, 9, 1, 2, 4]

const checkDogs = function (age, i) {
    console.log(`Dog number ${i + 1} is ${age > 3 ? 'Adult' : 'Puppy'} and is ${age} years old`);
}

correctedDogs.forEach(checkDogs);

/*
Dog number 1 is Adult and is 5 years old
Dog number 2 is Puppy and is 2 years old
Dog number 3 is Adult and is 8 years old
Dog number 4 is Adult and is 9 years old
Dog number 5 is Puppy and is 1 years old
Dog number 6 is Puppy and is 2 years old
Dog number 7 is Adult and is 4 years old
*/
