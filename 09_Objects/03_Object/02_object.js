
// To Access Object Data we have Dot Notation(.) and Square bracket notation[]

const kunal = {
    firstName: 'Kunal',
    lastName: 'Kanse',
    age: 22,
    Job: 'Java Full Stack developer',
    friends: ['Aditya', 'Omkar', 'Kunal']
}

// console.log(kunal);
console.log(kunal.lastName);
console.log(kunal['firstName']);

console.log();
///////////////////////////////////////
// we can put any expression insode square bracket notation
const nameKey = 'Name';
console.log(kunal['first' + nameKey]);
console.log(kunal['last' + nameKey]);

/////////////////////////////////////////////
const select = prompt('choose between firstName, lastName, age, job, and friends');

if (kunal[select]) {
    console.log(kunal[select]);
} else {
    console.log(`Object does not contains any Key of '${select}'`);
}

//////////////////////////////////////////
// Addig new Property

kunal.location = 'Pune';
kunal['instgram'] = 'the_kunalkanse';
console.log(kunal);

/////////////////////////////////////
console.log(`${kunal.firstName} Has ${kunal.friends.length} friends & his best fried is ${kunal.friends[0]}`);
