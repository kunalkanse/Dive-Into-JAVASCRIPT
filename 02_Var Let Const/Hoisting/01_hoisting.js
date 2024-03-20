
// Hoisting is the default behavior in JavaScript where declarations of variables and 
//functions are moved to the top of their respective scopes during the compilation phase

console.log(firstName); //undefined
// console.log(job);
// console.log(age);

var firstName = 'Kunal';

let job = 'developer';
const age = 23;

//ERR : Cannot access before initialization

////////////////////////////////////////

console.log(add1(2, 3));    // 5

console.log(add2);  // undefined
// console.log(add2(2,3)); // undefined(2,3), 

console.log(add3);  // undefined// 
// console.log(add3(2,3)); // undefined(2,3),

function add1(a, b) {
    return a + b;
}

var add2 = function (a, b) {
    return a + b;
}

var add3 = (a, b) => a + b;

//////////////////////////////////
// Cannot access 'add2' before initialization

// const add2 = function (a, b) {
//     return a + b;
// }

// let add3 = (a, b) => a + b;

console.log(!undefined);    // true
