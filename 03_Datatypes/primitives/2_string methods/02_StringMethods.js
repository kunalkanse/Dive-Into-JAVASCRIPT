const name = "Kunal";
const age = 23;


console.log(`My name is ${name}  & my age is ${age}`);

const name1 = new String('kunal-kanse');

console.log(name.length);   // 5
console.log(name.toUpperCase());    // KUNAL
console.log(name1.charAt(6));   // k
console.log(name1.indexOf('s'));    // 9

console.log();

const subName = name1.substring(6, 11);  // cant work for negative values
console.log(subName);   // kanse  

const sliceName1 = name1.slice(0, 5);
const sliceName2 = name1.slice(-5, 2);    //negative values can be used
console.log(sliceName1);    // kunal
console.log(sliceName2);    // 

//////////////////////////////////////////////////////////
console.log();
/////////////////////////////////////////////////////////

const newStr1 = "   KK    ";
const strTrim = newStr1.trim();
console.log(newStr1);   //   KK    
console.log(strTrim);   // KK

///////////////////////////////////////////////
console.log();
////////////////////////////////////////////////

const url = 'https://google.com/google%20facebook';
const newUrl = url.replace('%20', '-')
console.log(newUrl);    // https://google.com/google-facebook


///////////////////////////////////////////////////////
console.log(url.includes('facebook'));  // true
console.log(url.includes('instagram')); // false
///////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// split method
const fullname = 'kunal-sharad-kanse'
console.log(fullname.split());  // [ 'kunal-sharad-kanse' ]
console.log(fullname.split(''));
/*[
    'k', 'u', 'n', 'a', 'l',
    '-', 's', 'h', 'a', 'r',
    'a', 'd', '-', 'k', 'a',
    'n', 's', 'e'
  ]*/
console.log(fullname.split('-'));
//[ 'kunal', 'sharad', 'kanse' ]

////////////////////////////////////////////////////
console.log();
////////////////////////////////////////////////////

for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i));
}
// A...Z
