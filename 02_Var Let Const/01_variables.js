
const accountId = 144553;
let accountEmail = "kanseks008@gmail.com";
var accountPassword = "123456";

accountCity = "pune";   // loosely typed language, datatype not required

let accountState;

// re-initialization Not Allowed for const
/* 
    accountId = 2;
*/

/* 
    prefer not to use var
    because of issue in block scope & functional scope
    {} => scope
*/

// reinitialise
accountEmail = "abc@gmail.com";
accountPassword = "312645";
accountCity = "mumbai";

console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);
