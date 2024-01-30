
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// In many scenarios we store result into a another 
//variable individually after performing operations.

// However we can also do it all in one go.  

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

const UsdtoRs = 83.23;

const depositedAmt = transactions
    .filter(trxn => trxn > 0)
    .map(function (trxn, i, arr) {
        // console.log(arr);
        return trxn * UsdtoRs;
    })
    .reduce((acc, curr) => acc + curr, 0);

console.log(`Total Deposited Amount in USD to RS : ${depositedAmt} RS `);
// Total Deposited Amount : Total Deposited Amount : 417814.6


// first filtered all deposit amounts (+ve amounts) using 
// filter() and then convert those values into US Dollar 
// using map() and then calculate total amout using reduce()
// These all methods attached with each other so this we can call method chaining

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const calcTotalDeposit = function (transaction, interestRate) {
    const totalDeposit = transaction
        .filter(amt => amt > 0)
        .reduce((acc, curr) => acc + curr, 0);

    const totalWithdraw = transaction
        .filter(amt => amt < 0)
        .reduce((acc, curr) => acc + curr, 0);

    const interest = transaction
        .filter(amt => amt > 0)
        .map(deposit => deposit * interestRate / 100)
        .filter((interest, i, arr) => {
            // console.log(arr);
            return interest >= 1;
        })
        .reduce((acc, curr) => acc + curr, 0);

    console.log();
    console.log(`Total Money Deposited ${totalDeposit}`);
    console.log(`Total Money Withdrawl ${Math.abs(totalWithdraw)}`);
    console.log(`Total interest on deposit ${interest}`);

    // Total Money Deposited 5020
    // Total Money Withdrawl 1180
    // Total interest on deposit 59.4
}

calcTotalDeposit(transactions, 1.2);