
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// as we can use includes() method to check whether the array 
//contains the value. However we check the equality, so it returns
// true or false.

// what if we wanted to check for a condition insted of the value
// then we can use some() method

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// some()
const transactions = [500, 80, 30, 170, -250, 40, -230, 120];

// to check any withdrawl in happened in the transactions
console.log(transactions.includes(-250));   // true
// or
 
const anyWithdrawl = transactions.some(amt => amt < 0);
console.log(anyWithdrawl);    // true


/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// every() method returns true only when all the elements of the array satisfy the condition

console.log(transactions.every(ele => ele > 0));    // false


const checkType = (ele) => typeof (ele) === 'number';
console.log(transactions.every(checkType));  // true
