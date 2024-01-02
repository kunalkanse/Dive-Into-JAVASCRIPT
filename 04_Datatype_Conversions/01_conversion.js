
let score = "33";

console.log(typeof score);  // string
console.log(typeof (score)); // string

let valInNumber = Number(score)
console.log(typeof valInNumber);

let combo = "23abc";
let strToNum = Number(combo)
console.log(strToNum);  // NAN
console.log(typeof strToNum);   // number

let nullVal = null;
let nullToNum = Number(nullVal)
console.log(nullToNum);  // 0
console.log(typeof nullToNum);   // number
console.log(String(nullVal))    // null
// Number conversions

// "33" => 33
// "33abc" => NAN (number)
// "kunal" => NAN
// undefined converts to NAN
// boolean convertd :  true => 1 , false => 0

//*****************  Boolean conversions  ******************************** */

let isLogged = true;
console.log(Boolean(isLogged)); // true

// 1 => true , 0 => false
// "" => false , "kunal" => true


//************* String conversions ****************************

let values = 33;

let stringvalue = String(values)
console.log(stringvalue);   // 33
console.log(typeof stringvalue);    // string


// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;     // Undefined
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}