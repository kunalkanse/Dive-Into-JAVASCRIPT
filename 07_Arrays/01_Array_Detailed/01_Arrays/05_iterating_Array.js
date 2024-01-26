
const kunal = ['kunal', 'kanse', '7387529448',
    'kanseks008@gmail.com', 2023 - 2001, ['savita', 'sharad'], true]

// type is empty array which will store type of element
const type = [];

///////////////////////////////////////////////////////
for (let index = 0; index < kunal.length; index++) {
    const element = kunal[index];
    console.log(element);
}

/*
kunal
kanse
7387529448
kanseks008@gmail.com
22
[ 'savita', 'sharad' ]
true
*/
//////////////////////////////////////////////////////
console.log();
//////////////////////////////////////////////////////
for (let index = 0; index < kunal.length; index++) {
    type[index] = typeof kunal[index];
    console.log(`${kunal[index]} =>  ${type[index]}`);
}

/*
kunal =>  string
kanse =>  string
7387529448 =>  string
kanseks008@gmail.com =>  string
22 =>  number
savita,sharad =>  object
true =>  boolean
*/
//////////////////////////////////////////////////////
console.log();
//////////////////////////////////////////////////////

const years = [1996, 2001, 1976, 2017, 1984];
const ages = [];

for (let index = 0; index < years.length; index++) {
    ages.push(2023 - years[index]);
}

console.log(ages);  // [ 27, 22, 47, 6, 39 ]
console.log();
/////////////////////////////////////////////////////////
//  reverse iterations

for (let index = kunal.length - 1; index >= 0; index--) {
    const element = kunal[index];
    console.log(element);
}

/*true
[ 'savita', 'sharad' ]
22
kanseks008@gmail.com
7387529448
kanse
kunal
*/
