
// Equality Operators: == vs. ===

const age = 18;
if (age === 18) // Strict euality
{
    console.log("You just become adult.. !!");
}

console.log(18 === 18); // true
console.log(18 === 19); // false

// loose conversion
console.log(18 == "18");  // true

/////////////////////////////////////

// prompt always returns string
// we can typecast it.

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

//Strict Not equal to 
if (favourite !== 23) console.log('Why not 23?');