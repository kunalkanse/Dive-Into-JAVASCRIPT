
let myDate = new Date();

console.log(typeof myDate);

console.log(myDate);    //2023-10-11T14:28:36.108Z
console.log(myDate.toString()); //Wed Oct 11 2023 19:58:36 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); //Wed Oct 11 2023

console.log(myDate.toLocaleString());   //11/10/2023, 7:58:36 pm

console.log('\n');

let myCreatedDate = new Date(2023 , 9 , 23);
let myCreatedDateTime = new Date(2022 , 08 , 15 , 5 , 3);

console.log(myCreatedDate);
console.log(myCreatedDate.toString());

console.log(myCreatedDateTime.toLocaleString());    //15/9/2022, 5:03:00 am

console.log('\n');

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);    // starting from 0
console.log(newDate.getDay());  // mon - sun

































// Hitesh
