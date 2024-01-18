
// In javascript we can store any type of data inside Arrays
let a = ["Hello", 2, true, undefined, null, function(){},[],{} , 100]

///////////////////////////////////////////////////////////////////////////
let emp = ['jonas','thakur',2001,'developer',['kunal','omkar', 'rohit']];

console.log(a);
console.log(typeof a);  // Object

console.log();
 
console.log(a[0]);  // Hello
console.log(a[a.length - 1]);   // 100

console.log();

for(const i of a)
{
    console.log(i);
}
