
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// findIndex() works almost the same as find() method
// The difference is it returns index of the first matching element 

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
 
const arr = [321, 567, 61, -345, 63, 95];

const index = arr.findIndex(elem => elem < 0);

arr.splice(index, 1);

console.log(index); // 3
console.log(arr);   // [ 321, 567, 61, 63, 95 ]
