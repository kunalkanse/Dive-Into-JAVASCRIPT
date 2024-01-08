///////////////////////////////////////
// Short Circuiting (&& and ||)

console.log('---- OR ----');
// returns first truthy value, if  there is no truthy value then returns last value

console.log(3 || 'kunal');  // 3
console.log('' || 'kunal'); // 'kunal
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

console.log('---- AND ----');
// returns first falsy value, there is no falsy value then returns last value

console.log(0 && 'kunal');  // 0
console.log(7 && 'kunal');  // kunal

console.log('Hello' && 23 && null && 'jonas');  // null
