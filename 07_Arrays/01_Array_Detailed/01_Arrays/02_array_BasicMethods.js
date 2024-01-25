
const friends = ['Kunal', 'Aditya', 'Omkar'];

/////ADD Elements  //////////////////////////////////////////////////
const pushVal = friends.push('Sanket'); //[ 'Kunal', 'Aditya', 'Omkar', 'Sanket' ]
console.log(pushVal);   // 4 (Length of new Array) 

friends.unshift('Shreyash');   // [ 'Shreyash', 'Kunal', 'Aditya', 'Omkar', 'Sanket' ]
console.log(friends);
// Ushift also returns size of new array


//// Remove Elements ////////////////////////////////////////////////
const popVal = friends.pop();
console.log(popVal);    // Sanket
console.log(friends);   //[ 'Shreyash', 'Kunal', 'Aditya', 'Omkar' ]

const shiftVal = friends.shift();
console.log(shiftVal);    // Shreyash
console.log(friends);   //[ 'Kunal', 'Aditya', 'Omkar' ]

/////////////////////////////////////////////////////////////
console.log(friends.indexOf('Aditya')); // 1
console.log(friends.indexOf('tatya'));  //returns -1 , if element not present

console.log(friends.includes('Omkar')); // true
console.log(friends.includes('euu'));   // false

if (friends.includes('Aditya')) {
    console.log("You have a friend called Aditya");
} else {
    console.log("You dont have friend called Aditya");
}
