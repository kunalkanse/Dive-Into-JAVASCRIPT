
const friend1 = 'Kunal';
const friend2 = 'Aditya';
const friend3 = 'Omkar';

// Using Array literals
const friends = ['Kunal', 'Aditya', 'Omkar'];
console.log(friends);

//  Using constructor
const years = new Array(1947, 2001, 2023, 1976, 2014);

///////////////////////////////////
console.log(friends[0]);    //Kunal
console.log(years[2]);  // 2023

////////////////////////////////////
console.log(friends.length);    // 3
console.log(friends[friends.length - 1]);   //Omkar

////////////////////////////////////
friends[1] = "Shubham"
console.log(friends);   // [ 'Kunal', 'Shubham', 'Omkar' ]

///////////////////////////////////////
const lastName = 'kanse';
const kunal = ['kunal', lastName, 2023 - 2001, friends];
console.log(kunal);
console.log(kunal.length);  // 4

///////////////////////////////////////
//Exercise
console.log();

const calcAge = (age) => 2023 - age;

const age = [calcAge(2001), calcAge(2013)];
console.log(age);   // [ 22, 10 ]

console.log();

age.forEach(element => {
    console.log(calcAge(element));  // 2001  2013
});
