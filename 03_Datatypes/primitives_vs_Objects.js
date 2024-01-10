
/////////////////////////////////////
// Primitive
let age = 30;
let oldAge = age;
age = 31;
console.log(age);  //31
console.log(oldAge);  // 30

//////////////////////////////////////////////////////////////////////////////////////////
// primitive datatypes allocate memory into stack.
// if one variable value passed to another variable
// changes affect to only that particular variable.
//////////////////////////////////////////////////////////////////////////////////////////
// non-primitives datatypes allocate memory in Heap.
// gives reference of original value if passing to another variable
// changes will affect to both variables, because both references points to same data.
//////////////////////////////////////////////////////////////////////////////////////////


// Objects
const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

/////////////////////////////////////
// Arrays

const DC = ["Batman", "Superman", "wonder woman", "flash", "aquaman"];

const marvel = DC;
marvel.push("Kunal");

console.log(DC);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// Exmple 2 ) 

const flight = 'KSK56';

const passenger = {
    name: 'kunal kanse',
    passport: 123645798
}

const checIn = function (flightNum, passenger) {
    flightNum = 'LH989';
    passenger.name = 'mr.' + passenger.name;

    if (passenger.passport === 123645798) {
        alert('Check in');
    } else {
        alert('Wrong Passport...!!!');
    }
}

checIn(flight, passenger);

console.log(flight);    // Original alue not changed
console.log(passenger); // Original value changed

