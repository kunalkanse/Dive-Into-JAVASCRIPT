///////////////////////////////////////
// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1} : you deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1} : you withdrew ${movement}`);
    }
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
console.log();
// calling another function in forEach

function info(movement, i, arr) {
    if (movement > 0) {
        console.log(`Movement ${i + 1} : you deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1} : you withdrew ${movement}`);
    }
}

movements.forEach(info);

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
console.log();
// Using Arrow function inside forEach Function

movements.forEach((movement, i, arr) => {
    if (movement > 0) {
        console.log(`Movement ${i + 1} : you deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1} : you withdrew ${movement}`);
    }
})


///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
