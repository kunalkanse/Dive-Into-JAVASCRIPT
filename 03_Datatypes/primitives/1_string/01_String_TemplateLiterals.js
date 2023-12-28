////////////////////////////////////
// Strings and Template Literals
const firstName = 'kunal';
const job = 'developer';
const birthYear = 2001;
const year = 2022;

// simple concatenation
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

// concatenation using template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('\n\String with \n\
multiple \n\
lines');

console.log();

console.log(`String
multiple
lines`);